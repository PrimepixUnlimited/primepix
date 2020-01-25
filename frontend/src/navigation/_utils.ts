import { StackViewTransitionConfigs } from 'react-navigation-stack'

import ROUTES from '../navigation/_routes'

export const dynamicModalTransition = (transitionProps, prevTransitionProps) => {
  const isModal = Object.keys(ROUTES).some(
    screenName =>
      screenName === transitionProps.scene.route.routeName ||
      (prevTransitionProps && screenName === prevTransitionProps.scene.route.routeName)
  )
  return StackViewTransitionConfigs.defaultTransitionConfig(
    transitionProps,
    prevTransitionProps,
    isModal
  )
}
