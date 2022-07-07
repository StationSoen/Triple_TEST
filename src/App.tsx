import React from "react";
import styled from "styled-components";

import { imgUtil } from "./asset/image/image_container";
import { Container } from "./components/Container";
import { Img } from "./components/Img";
import { Margin } from "./components/Margin";
import { Text } from "./components/Text";
import { colors } from "./constants/colors";

const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100vw;
  align-items: center;
  justify-content: center;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  width: 1200px;
  padding-top: 150px;
  padding-bottom: 64px;
  padding-left: 55.55px;
  padding-right: 55.55px;
`;

const TimelineTextContainer = styled.div`
  display: flex;
  flex-direction: row;
  position: absolute;
  width: 100%auto;
  height: 100%auto;
  padding-top: 280px;
  justify-content: center;
`;

const App = () => {
  return (
    <MainContainer>
      {/* 1200px */}
      <ContentContainer>
        {/* 로고 & 날짜 */}
        <Container.Row style={{ justifyContent: "center" }}>
          <Img src={imgUtil.tripleLogo} width={400} aspectRatio={1.183} />
          <TimelineTextContainer
          // color={colors.black + "B3"}
          >
            2019년 2월 기준
          </TimelineTextContainer>
        </Container.Row>
        {/* 문구 & 하단 뱃지 */}
        <Container.Col>
          <IndicatorText boldText="350만 명" text="의 사용자" />
          <Margin.V margin={36} />
          <IndicatorText boldText="21만 개" text="의 리뷰" />
          <Margin.V margin={36} />
          <IndicatorText boldText="650만 개" text="의 저장" />
          <Margin.V margin={36} />
          <Margin.V margin={50} />
          <Container.Row>
            <Badge
              logo={imgUtil.playStore}
              text1={"2018 구글 플레이스토어"}
              text2={"올해의 앱 최우수상 수상"}
            />
            <Margin.H margin={39} />
            <Badge
              logo={imgUtil.appStore}
              text1={"2018 애플 앱스토어"}
              text2={"오늘의 여행앱 선정"}
            />
          </Container.Row>
        </Container.Col>
      </ContentContainer>
    </MainContainer>
  );
};

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

interface IndicatorTextProps {
  boldText: string;
  text: string;
}

const IndicatorText = ({ boldText, text }: IndicatorTextProps) => {
  return (
    <Container.Row>
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

export default App;
