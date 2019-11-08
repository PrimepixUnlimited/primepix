import React from 'react'
import { Alert, ScrollView, View } from 'react-native'
import { useMutation, useQuery } from '@apollo/react-hooks'
import { Text } from 'react-native-elements'
import moment from 'moment'
import {
  NavigationParams,
  NavigationRoute,
  NavigationScreenProp
} from 'react-navigation'
import { NavigationStackScreenComponent } from 'react-navigation-stack'

import ROUTES from '../../navigation/_routes'

import { ME_QUERY } from '../../graphql/queries'
import { SIGNOUT_MUTATION } from '../../graphql/mutations'

import Header from '../../components/Header'
import SubHeading from '../../components/SubHeading'
import Button from '../../components/Button'

import asyncStorage from '../../lib/async-storage'
import styles from '../../constants/styles'

interface Props {
  navigation: NavigationScreenProp<NavigationRoute, NavigationParams>
}

const ProfileScreen: NavigationStackScreenComponent<Props> = ({
  navigation: { navigate }
}) => {
  const { data } = useQuery(ME_QUERY)
  const [signout, { loading }] = useMutation(SIGNOUT_MUTATION)

  const handleSignOut = async () => {
    try {
      const {
        data: {
          signout: { message }
        }
      } = await signout()
      if (message) {
        await asyncStorage.removeToken()
        navigate(ROUTES.Landing)
      }
    } catch (err) {
      Alert.alert('Error', err.message)
    }
  }

  return (
    <ScrollView
      style={[styles.common.screenContainer, styles.common.fullHeight]}
    >
      <SubHeading>Your profile</SubHeading>
      <View
        style={[
          styles.common.contentContainer,
          styles.common.contentPaddingHorizontal
        ]}
      >
        {data && data.me && (
          <View>
            <Text style={styles.text.body}>{data.me.email}</Text>
            <Text style={styles.text.body}>
              Last login: {moment(data.me.updatedAt).format('DD/MM/YYYY HH:mm')}
            </Text>
            {data.me.permissions &&
              data.me.permissions.map(permission => (
                <Text key={permission} style={styles.text.body}>
                  You're: {permission}
                </Text>
              ))}
          </View>
        )}
        <Button loading={loading} onPress={handleSignOut} title="Sign out" />
      </View>
    </ScrollView>
  )
}

ProfileScreen.navigationOptions = {
  header: () => <Header showBack title="Navigation" />
}

export default ProfileScreen
