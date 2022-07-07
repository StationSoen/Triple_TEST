import React from "react";
import styled from "styled-components";

interface MarginProp {
  margin: number;
}
const MarginH = styled.div<MarginProp>`
  display: flex;
  width: ${(props) => props.margin}px;
`;
const MarginV = styled.div<MarginProp>`
  display: flex;
  height: ${(props) => props.margin}px;
`;

export const Margin = {
  H: MarginH,
  V: MarginV,
};
