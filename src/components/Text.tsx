import React from "react";
import styled from "styled-components";

interface StyledPProps {
  color: string;
  fontSize: number;
}

const StyledP = styled.p<StyledPProps>`
  display: flex;
  flex-direction: row;
  color: ${(props) => props.color};
  font-size: ${(props) => props.fontSize}px;
`;

interface TextProps extends StyledPProps {
  text: string;
  style?: React.CSSProperties;
}
export const Text = ({ text, color, fontSize, style }: TextProps) => {
  return (
    <StyledP color={color} fontSize={fontSize} style={style}>
      {text}
    </StyledP>
  );
};
