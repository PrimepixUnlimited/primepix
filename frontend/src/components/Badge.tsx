import React, { FC } from 'react'
import { Badge, BadgeProps } from 'react-native-elements'

interface Props extends BadgeProps {
  // custom props
}

const BadgeWrapper: FC<Props> = ({
  badgeStyle,
  containerStyle,
  status,
  value
}) => (
  <Badge
    badgeStyle={badgeStyle}
    status={status}
    containerStyle={containerStyle}
    value={value}
  />
)

export default BadgeWrapper
