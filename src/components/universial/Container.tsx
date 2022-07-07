import React from "react";
import styled from "styled-components";

const ContainerRow = styled.div`
  display: flex;
  flex-direction: row;
`;
const ContainerCol = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Container = {
  Row: ContainerRow,
  Col: ContainerCol,
};
