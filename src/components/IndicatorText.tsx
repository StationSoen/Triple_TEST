import React, { useRef, useState } from 'react'
import { useEffect } from 'react'

import { Container, Text } from '~/components'
import { colors } from '~/constants'

const easeOut = (x: number): number => {
  if (x <= 0) {
    return 0
  }
  if (x >= 1) {
    return 1
  }
  return x === 1 ? 1 : 1 - Math.pow(2, -10 * x)
}

interface IndicatorTextProps {
  boldNumber: number
  boldText: string
  text: string
}

const IndicatorText = ({ boldNumber, boldText, text }: IndicatorTextProps) => {
  // states
  const [number, setNumber] = useState<number>(0)

  // ref
  const counter = useRef<number>(0)

  // vals
  const timeInterval = 10

  // use Effect
  useEffect(() => {
    const interval = setInterval(() => {
      counter.current = counter.current + timeInterval / 2000
      setNumber(() => easeOut(counter.current) * boldNumber)
      if (counter.current > 1) {
        clearInterval(interval)
      }
    }, timeInterval)
    return () => clearInterval(interval)
  }, [boldNumber])

  return (
    <Container.Row>
      <Text
        text={`${Math.round(number)}`}
        color={colors.black}
        fontSize={36}
        style={{ fontWeight: 'bold' }}
      />
      <Text
        text={boldText}
        color={colors.black}
        fontSize={36}
        style={{ fontWeight: 'bold' }}
      />
      <Text
        text={text}
        color={colors.black}
        fontSize={36}
        style={{ fontWeight: 'normal' }}
      />
    </Container.Row>
  )
}

export default IndicatorText
