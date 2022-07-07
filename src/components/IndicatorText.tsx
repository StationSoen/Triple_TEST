import React, { useRef, useState } from "react";
import { useEffect } from "react";

import { Container, Text } from "~/components";
import { colors } from "~/constants";

const easeOutSine = (x: number): number => {
  // EASEOUT function : input (0~1), output (0~1)
  return Math.sin((x * Math.PI) / 2);
};

interface IndicatorTextProps {
  boldNumber: number;
  boldText: string;
  text: string;
}

const IndicatorText = ({ boldNumber, boldText, text }: IndicatorTextProps) => {
  const [number, setNumber] = useState<number>(0);
  const counter = useRef<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      counter.current = counter.current + 10 / 2000;
      setNumber(() => easeOutSine(counter.current) * boldNumber);
      if (counter.current >= 1) {
        clearInterval(interval);
      }
    }, 10);
    return () => clearInterval(interval);
  }, []);

  return (
    <Container.Row>
      <Text
        text={`${~~number}`}
        color={colors.black}
        fontSize={36}
        style={{ fontWeight: "bold" }}
      />
      <Text
        text={boldText}
        color={colors.black}
        fontSize={36}
        style={{ fontWeight: "bold" }}
      />
      <Text
        text={text}
        color={colors.black}
        fontSize={36}
        style={{ fontWeight: "normal" }}
      />
    </Container.Row>
  );
};

export default IndicatorText;
