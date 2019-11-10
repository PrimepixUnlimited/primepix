import React, { useState } from 'react'
import { Alert, Dimensions, StyleSheet, Switch, View } from 'react-native'
import { Text } from 'react-native-elements'
import { useQuery, useMutation } from '@apollo/react-hooks'
import {
  NavigationParams,
  NavigationRoute,
  NavigationScreenProp
} from 'react-navigation'
import { NavigationStackScreenComponent } from 'react-navigation-stack'
import Carousel, { Pagination } from 'react-native-snap-carousel'

interface Props {
  navigation: NavigationScreenProp<NavigationRoute, NavigationParams>
}

interface Plan {
  amount: number
  currencySymbol: string
  discount: number
  id: string
  info: {
    title: string
    active: boolean
  }[]
  interval: string
  nickname: string
}

import ROUTES from '../../navigation/_routes'

import { ME_QUERY, PLANS_QUERY } from '../../graphql/queries'
import {
  CREATE_SUBSCRIPTION_MUTATION,
  UPDATE_SUBSCRIPTION_MUTATION
} from '../../graphql/mutations'

import Header from '../../components/Header'
import ScreenView from '../../components/ScreenView'
import PricingCard from '../../components/PricingCard'
import LoadingPlans from '../../components/loading/Plans'
import Panel from '../../components/Panel'
import Button from '../../components/Button'
import Icon from '../../components/Icon'

import styles from '../../constants/styles'
const { width: SCREEN_WIDTH } = Dimensions.get('screen')

const PlansScreen: NavigationStackScreenComponent<Props> = ({
  navigation: { navigate }
}) => {
  const [billingCycleVal, setBillingCycleVal] = useState(false)
  const [billingCycle, setBillingCycle] = useState('month')
  const [activeSlide, setActiveSlide] = useState(1)
  let carousel

  const { data: user } = useQuery(ME_QUERY)
  const { data, error, loading } = useQuery(PLANS_QUERY, {
    variables: { billingCycle: billingCycle }
  })
  const [createSubscription, { loading: subscriptionLoading }] = useMutation(
    CREATE_SUBSCRIPTION_MUTATION
  )
  const [
    updateSubscription,
    { loading: updateSubscriptionLoading }
  ] = useMutation(UPDATE_SUBSCRIPTION_MUTATION)

  const onBillingCycleChange = (val: boolean) => {
    setBillingCycleVal(val)
    setBillingCycle(!val ? 'month' : 'year')
  }

  const onSelect = async (planId: string) => {
    try {
      if (!user.me.payment || !user.me.payment.methods) {
        return navigate(ROUTES.Payment, { planId })
      }
      if (!user.me.subscription || !user.me.subscription.subscriptionId) {
        const { data: subscription } = await createSubscription({
          variables: { planId }
        })
        if (subscription.createSubscription) {
          return navigate(ROUTES.Main)
        }
      }
      const { data: updatedSubscription } = await updateSubscription({
        variables: { planId }
      })
      if (updatedSubscription.updateSubscription) {
        return navigate(ROUTES.Main)
      }
    } catch (e) {
      Alert.alert(e.message)
    }
  }

  const renderHeading = () => (
    <View>
      <Text h2 style={styles.text.screenHeading}>
        Our pricing is simple
      </Text>
      <View style={styles.space.m} />
      <Text style={styles.text.screenSubHeading}>
        No commitments. No credit cards required. Start your 14-day trial today!
      </Text>
      <View style={styles.space.m} />
    </View>
  )

  const renderSwitch = () => (
    <View style={s.switchContainer}>
      <Text
        onPress={() => onBillingCycleChange(false)}
        style={{
          color: billingCycleVal
            ? styles.greyScaleOpacity(0.5).white
            : styles.greyScale.white,
          fontSize: 16,
          lineHeight: 20
        }}
      >
        Monthly
      </Text>
      <View style={{ marginHorizontal: 10 }}>
        <Switch
          ios_backgroundColor={styles.greyScaleOpacity(0.02).white}
          thumbColor={styles.colors.success}
          trackColor={{
            false: styles.colors.success,
            true: styles.greyScaleOpacity(0.02).white
          }}
          onValueChange={val => onBillingCycleChange(val)}
          value={billingCycleVal}
        />
      </View>
      <Text
        onPress={() => onBillingCycleChange(true)}
        style={{
          color: !billingCycleVal
            ? styles.greyScaleOpacity(0.5).white
            : styles.greyScale.white,
          fontSize: 16,
          lineHeight: 20
        }}
      >
        Anually
      </Text>
    </View>
  )

  const renderCarousel = () => (
    <View>
      <Pagination
        dotsLength={data.plans.length}
        activeDotIndex={activeSlide}
        containerStyle={{ paddingVertical: 8 }}
        dotColor={styles.colors.primary}
        dotStyle={{ width: 8, height: 8, borderRadius: 4, marginHorizontal: 8 }}
        inactiveDotColor={styles.greyScaleOpacity(0.5).white}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
        carouselRef={carousel}
        tappableDots={!!carousel}
      />
      <View style={styles.space.s} />
      <Carousel
        ref={c => {
          carousel = c
        }}
        containerCustomStyle={{
          marginLeft: -20
        }}
        data={data.plans}
        renderItem={renderPlan}
        sliderWidth={SCREEN_WIDTH}
        itemWidth={SCREEN_WIDTH - 80}
        firstItem={activeSlide}
        activeSlideOffset={0}
        onSnapToItem={index => setActiveSlide(index)}
      />
    </View>
  )

  const renderPlan = ({ item: plan, index }: { item: Plan; index: number }) => {
    const calcDiscount: number = plan.discount && (index + 1) * plan.discount
    return (
      <PricingCard
        button={
          <Button
            loading={subscriptionLoading || updateSubscriptionLoading}
            onPress={() => onSelect(plan.id)}
            titleStyle={{ color: '#0bd685', fontSize: 14 }}
            title={`Get started now`.toUpperCase()}
            iconRight
            icon={
              <Icon
                name="arrow-forward"
                color="#0bd685"
                size={18}
                underlayColor={styles.greyScale.black2}
              />
            }
            type="clear"
          />
        }
        currency={plan.currencySymbol}
        discount={calcDiscount}
        info={plan.info}
        key={plan.id}
        price={`${plan.amount}`}
        title={plan.nickname}
        period={plan.interval}
      />
    )
  }

  const renderPlans = () => (
    <View>
      {renderHeading()}
      {renderSwitch()}
      <View style={styles.space.m} />
      {renderCarousel()}
      <Text style={styles.text.screenSubHeading}>Need help?</Text>
    </View>
  )

  if (loading && !data) {
    return (
      <ScreenView heading="Select a plan" noPadding>
        <View style={s.container}>
          <LoadingPlans />
        </View>
      </ScreenView>
    )
  }

  if (error) {
    return (
      <ScreenView heading="Select a plan" noPadding>
        <View style={s.container}>
          <Panel type="error">
            {error.graphQLErrors.map(({ message }, i) => (
              <Text key={i} style={styles.text.body}>
                {message}
              </Text>
            ))}
          </Panel>
        </View>
      </ScreenView>
    )
  }

  return (
    <ScreenView heading="Select a plan" noPadding>
      <View style={s.container}>
        {data.plans && data.plans.length > 0 ? (
          renderPlans()
        ) : (
          <Text>No plans found...</Text>
        )}
      </View>
    </ScreenView>
  )
}

PlansScreen.navigationOptions = {
  header: () => <Header showBack title="Plan" />
}

const s = StyleSheet.create({
  container: {
    backgroundColor: '#55368e',
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 40
  },
  switchContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center'
  }
})

export default PlansScreen
