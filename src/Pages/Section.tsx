import React from "react";
import styled, { keyframes } from "styled-components";

import {
  Badge,
  Container,
  Img,
  IndicatorText,
  Margin,
  Text,
} from "~/components";
import { imgUtil } from "~/asset";
import { colors } from "~/constants";

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
  width: 1040px;
  min-width: 1040px;
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

const onLoad = keyframes`
from {
    opacity: 0.3;
    transform: translateY(50px);
}
to {
    opacity: 1;
}
`;

const AnimationContainer = styled(Container.Col)<{ delay: number }>`
  animation-delay: ${(props) => props.delay}ms;
  animation-duration: 700ms;
  animation-timing-function: ease-out;
  animation-name: ${onLoad};
  animation-fill-mode: forwards;
`;

const Section = () => {
  return (
    <MainContainer>
      {/* 1200px */}
      <ContentContainer>
        {/* 로고 & 날짜 */}
        <AnimationContainer delay={0}>
          <Container.Row style={{ justifyContent: "center" }}>
            <Img src={imgUtil.tripleLogo} width={400} aspectRatio={1.183} />
            <TimelineTextContainer>
              <Text
                text={"2019년 2월 기준"}
                color={colors.black + "B3"}
                fontSize={15}
              />
            </TimelineTextContainer>
          </Container.Row>
        </AnimationContainer>
        {/* 문구 & 하단 뱃지 */}
        <Container.Col>
          {/* 문구 */}
          <AnimationContainer delay={100}>
            <IndicatorText boldNumber={350} boldText="만 명" text="의 사용자" />
            <Margin.V margin={36} />
            <IndicatorText boldNumber={21} boldText="만 개" text="의 리뷰" />
            <Margin.V margin={36} />
            <IndicatorText boldNumber={650} boldText="만 개" text="의 저장" />
            <Margin.V margin={36} />
            <Margin.V margin={50} />
          </AnimationContainer>
          {/* 하단 뱃지 */}
          <AnimationContainer delay={200}>
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
          </AnimationContainer>
        </Container.Col>
      </ContentContainer>
    </MainContainer>
  );
};

export default Section;
