import React, { useState } from 'react'
import { Alert, GestureResponderEvent, StyleSheet, View } from 'react-native'
import { ButtonGroup, Text } from 'react-native-elements'
import { useQuery, useMutation } from '@apollo/react-hooks'
import {
  NavigationParams,
  NavigationRoute,
  NavigationScreenProp
} from 'react-navigation'
import { NavigationStackScreenComponent } from 'react-navigation-stack'

interface Props {
  navigation: NavigationScreenProp<NavigationRoute, NavigationParams>
}

import ROUTES from '../../navigation/_routes'

import { ME_QUERY, PLANS_QUERY } from '../../graphql/queries'
import { CREATE_SUBSCRIPTION_MUTATION } from '../../graphql/mutations'

import Header from '../../components/Header'
import ScreenView from '../../components/ScreenView'
import PricingCard from '../../components/PricingCard'
import LoadingPlans from '../../components/loading/Plans'
import Panel from '../../components/Panel'

import styles from '../../constants/styles'

const PlansScreen: NavigationStackScreenComponent<Props> = ({
  navigation: { navigate }
}) => {
  const buttons = ['Monthly', 'Annually']
  const [billingCycleIdx, setBillingCycleIdx] = useState(0)
  const [billingCycle, setBillingCycle] = useState('month')

  const { data: user } = useQuery(ME_QUERY)
  const { data, error, loading } = useQuery(PLANS_QUERY, {
    variables: { billingCycle: billingCycle }
  })
  const [createSubscription, { loading: subscriptionLoading }] = useMutation(
    CREATE_SUBSCRIPTION_MUTATION
  )

  const onSelect = async (planId: string) => {
    try {
      if (!user.me.payment.methods.length) {
        return navigate(ROUTES.Payment, { planId })
      }
      const { data: subscription } = await createSubscription({
        variables: { planId }
      })
      if (subscription.createSubscription) {
        return navigate(ROUTES.Main)
      }
    } catch (e) {
      Alert.alert(e.message)
    }
  }

  const renderPlans = () => (
    <View>
      <Text h2 style={styles.text.screenHeading}>
        Our pricing is simple
      </Text>
      <View style={styles.space.m} />
      <Text style={styles.text.screenSubHeading}>
        No commitments. No credit cards required. Start your 14-day trial today!
      </Text>
      <View style={styles.space.m} />
      <ButtonGroup
        onPress={idx => {
          setBillingCycleIdx(idx)
          setBillingCycle(idx === 0 ? 'month' : 'year')
        }}
        selectedIndex={billingCycleIdx}
        buttons={buttons}
      />
      <View style={styles.space.m} />
      {data.plans.map((plan, idx: number) => {
        const calcDiscount = plan.discount && (idx + 1) * plan.discount
        return (
          <PricingCard
            discount={calcDiscount}
            info={plan.info}
            key={plan.id}
            onSelect={() => onSelect(plan.id)}
            price={`£${plan.amount}`}
            title={plan.nickname}
            period={plan.interval}
          />
        )
      })}
      <Text style={styles.text.screenSubHeading}>Need help?</Text>
    </View>
  )

  if (loading) {
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
  header: () => <Header title="Plan" />
}

const s = StyleSheet.create({
  container: {
    backgroundColor: '#55368e',
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 40
  }
})

export default PlansScreen
