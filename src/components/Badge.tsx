import React from "react";

import { Container, Text, Margin, Img } from "~/components";
import { colors } from "~/constants";

interface BadgeProps {
  text1: string;
  text2: string;
  logo: any;
}
const Badge = ({ text1, text2, logo }: BadgeProps) => {
  return (
    <Container.Row>
      <Img src={logo} width={54} aspectRatio={1} />
      <Margin.H margin={8} />
      <Container.Col style={{ justifyContent: "center" }}>
        <Text fontSize={14} color={colors.black + "CC"} text={text1} />
        <Margin.V margin={4} />
        <Text fontSize={14} color={colors.black + "CC"} text={text2} />
        <Margin.V margin={4} />
      </Container.Col>
    </Container.Row>
  );
};

export default Badge;
