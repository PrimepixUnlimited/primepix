import React, { FC } from 'react'
import { Image, ImageStyle } from 'react-native'

interface Props {
  href?: string
  source?: { uri: string } | void
  style?: ImageStyle
}

const ImageWrapper: FC<Props> = ({ href, source, style }) => (
  <Image href={href} source={source} style={style} />
)

export default ImageWrapper
