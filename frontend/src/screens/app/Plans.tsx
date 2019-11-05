import React, { useState } from 'react'
import { ScrollView, Text, View } from 'react-native'
import { ButtonGroup } from 'react-native-elements'
import { useQuery, useMutation } from '@apollo/react-hooks'

import ROUTES from '../../navigation/_routes'

import { ME_QUERY, PLANS_QUERY } from '../../graphql/queries'
import { CREATE_SUBSCRIPTION_MUTATION } from '../../graphql/mutations'

import Header from '../../components/Header'
import SubHeading from '../../components/SubHeading'
import PricingCard from '../../components/PricingCard'

import styles from '../../constants/styles'

const PlansScreen = ({ navigation: { navigate } }) => {
  const buttons = ['Monthly', 'Annually']
  const [billingCycleIdx, setBillingCycleIdx] = useState(0)
  const [billingCycle, setBillingCycle] = useState('month')

  const { data: user } = useQuery(ME_QUERY)
  const { data, loading } = useQuery(PLANS_QUERY, {
    variables: { billingCycle: billingCycle }
  })
  const [createSubscription, { loading: subscriptionLoading }] = useMutation(
    CREATE_SUBSCRIPTION_MUTATION
  )

  const onSelect = async planId => {
    if (!user.me.payment) {
      return navigate(ROUTES.Payment, { planId })
    }
    const { data: subscription } = await createSubscription({
      variables: { planId }
    })
    if (subscription.createSubscription) {
      return navigate(ROUTES.Main)
    }
  }

  return (
    <ScrollView
      style={[styles.common.screenContainer, styles.common.fullHeight]}
    >
      <SubHeading>Select a plan</SubHeading>
      {loading ? (
        <Text style={styles.text.body}>Loading ...</Text>
      ) : (
        <View>
          <ButtonGroup
            onPress={idx => {
              setBillingCycleIdx(idx)
              setBillingCycle(idx === 0 ? 'month' : 'year')
            }}
            selectedIndex={billingCycleIdx}
            buttons={buttons}
          />
          {data.plans.map((plan, idx) => {
            const cardContainerStyles = {
              backgroundColor: styles.rainbow[idx],
              borderWidth: 0
            }
            const cardColor =
              idx !== 2 ? styles.colors.primary : styles.colors.tertiary
            return (
              <PricingCard
                button={{ title: 'GET STARTED' }}
                containerStyle={cardContainerStyles}
                color={cardColor}
                info={plan.info}
                key={plan.nickname}
                onButtonPress={e => onSelect(plan.id)}
                price={`£${plan.amount}`}
                title={plan.nickname}
              />
            )
          })}
        </View>
      )}
    </ScrollView>
  )
}

PlansScreen.navigationOptions = ({ navigation }) => ({
  header: <Header title="Plan" />
})

export default PlansScreen
