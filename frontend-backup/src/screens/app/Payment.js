import React, {useState} from 'react';
import {Alert, StyleSheet} from 'react-native';
import stripe from 'tipsi-stripe';
import {useMutation} from '@apollo/react-hooks';

import {
  CREATE_PAYMENT_METHOD_MUTATION,
  CREATE_SUBSCRIPTION_MUTATION,
} from '../../graphql/mutations';

import Header from '../../components/Header';
import ScreenView from '../../components/ScreenView';
import Button from '../../components/Button';
import Input from '../../components/Input';

import styles from '../../constants/styles';

const formatNumber = value => {
  var v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
  var matches = v.match(/\d{4,16}/g);
  var match = (matches && matches[0]) || '';
  var parts = [];

  for (let i = 0, len = match.length; i < len; i += 4) {
    parts.push(match.substring(i, i + 4));
  }

  if (parts.length) {
    return parts.join(' ');
  } else {
    return value;
  }
};

const PaymentScreen = ({navigation: {getParam, navigate}}) => {
  const [createPaymentMethod, {loading: paymentMethodLoading}] = useMutation(
    CREATE_PAYMENT_METHOD_MUTATION,
  );
  const [setSubscription, {loading: subscriptionLoading}] = useMutation(
    CREATE_SUBSCRIPTION_MUTATION,
  );
  const planId = getParam('planId');
  const [name, setName] = useState('');
  const [number, setNumber] = useState(0);
  const [expMonth, setExpMonth] = useState(0);
  const [expYear, setExpYear] = useState(0);
  const [cvc, setCvc] = useState(0);

  const onFormSubmit = async () => {
    try {
      const cardDetails = {
        number,
        expMonth: Number(expMonth),
        expYear: Number(expYear),
        cvc,
        name,
      };
      const {tokenId} = await stripe.createTokenWithCard(cardDetails);
      const res = await createPaymentMethod({variables: {tokenId}});
      if (res.data.createPaymentMethod) {
        const {data} = await setSubscription({variables: {planId}});
        if (data.setSubscription) {
          return navigate('app');
        }
      }
    } catch (e) {
      Alert.alert(e.message);
    }
  };

  return (
    <ScreenView heading="Add payment details">
      <Input
        containerStyle={styles.space.m}
        label="Cardholder name"
        leftIconName="account-card-details"
        leftIconType="material-community"
        onChangeText={val => setName(val)}
        placeholder="Firstname Lastname"
        value={name}
      />
      <Input
        containerStyle={styles.space.m}
        label="Card number"
        leftIconName="credit-card"
        leftIconType="material-community"
        onChangeText={val => setNumber(formatNumber(val))}
        placeholder="#### #### #### ####"
        value={number}
      />
      <Input
        containerStyle={styles.space.s}
        label="Expiry month"
        leftIconName="calendar"
        leftIconType="material-community"
        onChangeText={val => setExpMonth(val)}
        placeholder="MM"
        value={expMonth}
      />
      <Input
        containerStyle={styles.space.s}
        label="Expiry year"
        leftIconName="calendar"
        leftIconType="material-community"
        onChangeText={val => setExpYear(val)}
        placeholder="YYYY"
        value={expYear}
      />
      <Input
        containerStyle={styles.space.s}
        label="CVC"
        leftIconName="lock"
        onChangeText={val => setCvc(val)}
        placeholder="***"
        value={cvc}
      />
      <Button
        loading={paymentMethodLoading || subscriptionLoading}
        onPress={onFormSubmit}
        title="Add"
      />
      <Button
        onPress={e => navigate('signin')}
        title="Privacy policy"
        type="clear"
      />
      <Button
        onPress={e => navigate('signin')}
        title="Terms and conditions"
        type="clear"
      />
    </ScreenView>
  );
};

PaymentScreen.navigationOptions = ({navigation}) => ({
  header: <Header showBack title="Plan" />,
});

const s = StyleSheet.create({
  field: {
    width: '100%',
    color: styles.greyScale.white,
    borderColor: '#000000',
    borderWidth: 0,
    borderRadius: 5,
    backgroundColor: styles.greyScale.black2,
    overflow: 'hidden',
  },
});

export default PaymentScreen;
