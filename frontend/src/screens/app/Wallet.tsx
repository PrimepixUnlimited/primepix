import React from 'react'
import { ScrollView, View } from 'react-native'
import { Text } from 'react-native-elements'
import { useQuery } from '@apollo/react-hooks'
import {
  NavigationParams,
  NavigationRoute,
  NavigationScreenProp
} from 'react-navigation'
import { NavigationStackScreenComponent } from 'react-navigation-stack'
import { formatMoney } from 'accounting-js'

interface Props {
  navigation: NavigationScreenProp<NavigationRoute, NavigationParams>
}

import { PAYMENT_QUERY } from '../../graphql/queries'

import Header from '../../components/Header'
import SubHeading from '../../components/SubHeading'
import LoadingWallet from '../../components/loading/Wallet'
import Card from '../../components/Card'
import Icon from '../../components/Icon'
import Button from '../../components/Button'
import LinearGradient from '../../components/LinearGradient'

import styles from '../../constants/styles'

const WalletScreen: NavigationStackScreenComponent<Props> = () => {
  const { data, error, loading } = useQuery(PAYMENT_QUERY)

  const renderBalance = () => (
    <View
      style={[
        styles.common.contentContainer,
        styles.common.contentPaddingHorizontal,
        { flexDirection: 'row', justifyContent: 'space-between' }
      ]}
    >
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Icon
          color={styles.greyScale.white}
          name="cash-multiple"
          type="material-community"
        />
        <Text style={[styles.text.body, { marginLeft: 10 }]}>
          Current balance:
        </Text>
      </View>
      <Text style={[styles.text.body, styles.text.important]}>
        {console.log(data.payment.balance)}
        {formatMoney(data.payment.balance, {
          symbol: data.payment.currencySymbol,
          precision: 0
        })}
      </Text>
    </View>
  )

  const renderPaymentMethod = ({
    id,
    object,
    name,
    exp_month,
    exp_year,
    funding
  }: {
    id: string
    object: string
    name: string
    exp_month: number
    exp_year: number
    funding: string
  }) => (
    <View
      key={id}
      style={{ flexDirection: 'row', justifyContent: 'space-between' }}
    >
      <Icon color={styles.colors.primary} name={`${funding}-${object}`} />
      <Text style={styles.text.body}>{name}</Text>
      <Text style={styles.text.body}>
        {exp_month}/{exp_year}
      </Text>
    </View>
  )

  const renderPaymentMethods = () =>
    data.payment.sources.length > 0 && (
      <Card title="Payment methods">
        <View>
          {data.payment.sources.map(renderPaymentMethod)}
          <Button
            onPress={e => console.log(e)}
            title="View transactions"
            type="clear"
          />
        </View>
      </Card>
    )

  const renderInvoices = () =>
    data.payment.sources.length > 0 && (
      <Card title="Invoices">
        <View>
          {data.payment.sources.map(renderPaymentMethod)}
          <Button
            onPress={e => console.log(e)}
            title="View invoices"
            type="clear"
          />
        </View>
      </Card>
    )

  const renderContent = () =>
    !loading &&
    data.payment && (
      <LinearGradient>
        {renderBalance()}
        {renderPaymentMethods()}
        {renderInvoices()}
      </LinearGradient>
    )

  if (loading && !data) {
    return (
      <ScrollView style={styles.common.screenContainer}>
        <SubHeading>Wallet</SubHeading>
        <LoadingWallet />
      </ScrollView>
    )
  }

  return (
    <ScrollView style={styles.common.screenContainer}>
      <SubHeading>Wallet</SubHeading>
      {renderContent()}
    </ScrollView>
  )
}

WalletScreen.navigationOptions = {
  header: () => <Header showProfile showMenu title="Wallet" />
}

export default WalletScreen
