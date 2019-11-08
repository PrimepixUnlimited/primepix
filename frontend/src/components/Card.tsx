import React, { FC } from 'react'
import { StyleSheet } from 'react-native'
import { Card, CardProps } from 'react-native-elements'
import styles from '../constants/styles'

interface Props extends CardProps {
  // custom props
}

const CardWrapper: FC<Props> = ({
  children,
  containerStyle = s.container,
  dividerStyle,
  featuredSubtitle,
  featuredSubtitleStyle,
  featuredTitle,
  featuredTitleStyle,
  image,
  imageProps,
  imageStyle,
  imageWrapperStyle,
  title,
  titleStyle = s.title,
  wrapperStyle
}) => (
  <Card
    containerStyle={containerStyle}
    dividerStyle={dividerStyle}
    featuredSubtitle={featuredSubtitle}
    featuredSubtitleStyle={featuredSubtitleStyle}
    featuredTitle={featuredTitle}
    featuredTitleStyle={featuredTitleStyle}
    image={image}
    imageProps={imageProps}
    imageStyle={imageStyle}
    imageWrapperStyle={imageWrapperStyle}
    title={title}
    titleStyle={titleStyle}
    wrapperStyle={wrapperStyle}
  >
    {children}
  </Card>
)

const s = StyleSheet.create({
  container: {
    backgroundColor: styles.greyScale.black1,
    borderWidth: 0,
    borderRadius: 10
  },
  title: {
    color: styles.greyScale.white,
    fontSize: 22,
    fontWeight: 'normal',
    textAlign: 'left'
  }
})

export default CardWrapper
