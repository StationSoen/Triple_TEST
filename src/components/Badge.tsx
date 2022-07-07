import React from 'react'

import { Container, Text, Margin, Img } from '~/components'
import { colors } from '~/constants'

interface BadgeProps {
  text1: string
  text2: string
  logo: any
  alt: string
}
const Badge = ({ text1, text2, logo, alt }: BadgeProps) => {
  return (
    <Container.Row>
      <Img src={logo} alt={alt} width={54} aspectRatio={1} />
      <Margin.H margin={8} />
      <Container.Col style={{ justifyContent: 'center' }}>
        <Text
          fontSize={14}
          color={colors.black + 'CC'}
          text={text1}
          style={{ fontWeight: '700' }}
        />
        <Margin.V margin={4} />
        <Text
          fontSize={14}
          color={colors.black + 'CC'}
          text={text2}
          style={{ fontWeight: '700' }}
        />
        <Margin.V margin={4} />
      </Container.Col>
    </Container.Row>
  )
}

export default Badge
