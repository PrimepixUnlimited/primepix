import React, { useState } from 'react'
import { Alert, GestureResponderEvent, View } from 'react-native'
import { useMutation } from '@apollo/react-hooks'
import {
  NavigationParams,
  NavigationRoute,
  NavigationScreenProp
} from 'react-navigation'
import { NavigationStackScreenComponent } from 'react-navigation-stack'

interface Props {
  navigation: NavigationScreenProp<NavigationRoute, NavigationParams>
}
import { SIGNIN_MUTATION } from '../../graphql/mutations'

import ROUTES from '../../navigation/_routes'

import Header from '../../components/Header'
import ScreenView from '../../components/ScreenView'
import Button from '../../components/Button'
import Input from '../../components/Input'

import asyncStorage from '../../lib/async-storage'
import styles from '../../constants/styles'

const LoginScreen: NavigationStackScreenComponent<Props> = ({
  navigation: { navigate }
}) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [signin, { loading }] = useMutation(SIGNIN_MUTATION)

  const handleSubmit = async (e: GestureResponderEvent) => {
    try {
      const variables: { email: string; password: string } = { email, password }
      const {
        data: {
          signin: { token, user }
        }
      } = await signin({ variables })
      if (token) {
        await asyncStorage.setToken(token)
        if (!user.subscription) {
          return navigate(ROUTES.Plans)
        }
        return navigate(ROUTES.Main)
      }
    } catch (err) {
      return Alert.alert('Error', err.message)
    }
  }

  return (
    <ScreenView heading="Sign in">
      <Input
        containerStyle={styles.space.m}
        label="Your email address"
        leftIconName="email"
        onChangeText={val => setEmail(val)}
        placeholder="Email"
        textContentType="username"
        value={email}
      />
      <Input
        containerStyle={styles.space.m}
        label="Password"
        leftIconName="lock"
        onChangeText={val => setPassword(val)}
        placeholder="Password"
        secureTextEntry
        textContentType="password"
        value={password}
      />
      <Button loading={loading} onPress={handleSubmit} title="Sign in" />
      <Button
        onPress={e => navigate(ROUTES.SignUp)}
        title="Don't have an account? Register"
        type="clear"
      />
      <View style={styles.space.xxl} />
    </ScreenView>
  )
}

LoginScreen.navigationOptions = {
  header: () => <Header showBack title="Login" />
}

export default LoginScreen
