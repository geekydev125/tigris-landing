import styled, { css } from 'styled-components'

interface RoadMapProps {
  data?: string[]
}

interface ProcessProps {
  content: string
}

export const MobileRoadMap = ({ data }: RoadMapProps) => {
  return (
    <RoadmapContainer>
      <TimeLineCards>
        {data?.map((item: string, index: number) => (index < 2 ? <Process content={item} key={index} /> : ''))}
      </TimeLineCards>
      <TimeLine />
      <ReverseTimeLineCards>
        {data?.map((item: string, index: number) => (index >= 2 ? <ReverseProcess content={item} key={index} /> : ''))}
      </ReverseTimeLineCards>
    </RoadmapContainer>
  )
}

const Process = ({ content }: ProcessProps) => {
  return (
    <ProcessContainer>
      <Rectangle>{content}</Rectangle>
      <Line />
      <Circle />
    </ProcessContainer>
  )
}

const ReverseProcess = ({ content }: ProcessProps) => {
  return (
    <ProcessContainer>
      <Circle />
      <Line />
      <Rectangle>{content}</Rectangle>
    </ProcessContainer>
  )
}

const RoadmapContainer = styled.div`
  display: flex;
  height: 568px;
  justify-content: center;
`

const ProcessContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const Rectangle = styled.div`
  padding: 7px 23px;
  background: linear-gradient(90.54deg, rgba(24, 25, 29, 0.73) 2.78%, rgba(24, 25, 29, 0.5621) 167.38%);
  border-radius: 5px;
  backdrop-filter: blur(100px);
  height: fit-content;
  font-weight: 400;
  font-size: 16px;
  line-height: 28px;
  max-width: 136px;

  text-align: center;
  letter-spacing: 0.01em;
  text-transform: capitalize;
  text-align: center;
  color: ${(props) => props.theme.whiteAlt};
  max-width: 240px;
  @media screen and (max-width: 480px) {
    font-size: 12px;
  }
`

const Line = styled.div`
  height: 0;
  width: 57px;
  border: 1px solid ${(props) => props.theme.white};
  @media screen and (max-width: 470px) {
    width: 30px;
  }
`

const Circle = styled.div`
  width: 9px;
  height: 9px;
  min-width: 9px;
  min-height: 9px;
  border: 1px solid ${(props) => props.theme.white};
  border-radius: 100%;
`

const shareTimeLine = css`
  display: flex;
  flex-direction: column;
  gap: 15rem;
  @media screen and (max-width: 690px) {
    gap: 12rem;
  }

  @media screen and (max-width: 580px) {
    gap: 15rem;
  }

  @media screen and (max-width: 450px) {
    gap: 12rem;
  }

  @media screen and (max-width: 380px) {
    gap: 12rem;
  }

  @media screen and (max-width: 380px) {
    gap: 8rem;
  }
`

const TimeLineCards = styled.div`
  ${shareTimeLine};
`

const ReverseTimeLineCards = styled.div`
  ${shareTimeLine};
  justify-content: flex-end;
`

const TimeLine = styled.div`
  width: 0;
  height: 100%;
  border: 1px solid #3671e9;
`
