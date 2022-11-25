import styled, { css } from 'styled-components'

interface RoadMapProps {
  data?: string[]
}

interface ProcessProps {
  content: string
}

export const DeskRoadMap = ({ data }: RoadMapProps) => {
  return (
    <RoadmapContainer>
      <TimeLineCards>
        {data?.map((item: string, index: number) => (
          <Process content={item} key={index} />
        ))}
      </TimeLineCards>
      <TimeLine />
    </RoadmapContainer>
  )
}

const Process = ({ content }: ProcessProps) => {
  return (
    <ProcessContainer>
      <Rectangle>{content.replace(/(\r\n|\r|\n)/g, '\n')}</Rectangle>
      <Line />
      <Circle />
    </ProcessContainer>
  )
}

const RoadmapContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
`

const ProcessContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
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
  max-width: 240px;

  text-align: center;
  letter-spacing: 0.01em;
  text-transform: capitalize;
  text-align: center;
  color: ${(props) => props.theme.whiteAlt};
`

const Line = styled.div`
  height: 57px;
  width: 0;
  border: 1px solid ${(props) => props.theme.white};
`

const Circle = styled.div`
  width: 9px;
  height: 9px;
  border: 1px solid ${(props) => props.theme.white};
  border-radius: 50%;
`
const TimeLineCards = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
`

const TimeLine = styled.div`
  width: 100%;
  height: 0;
  border: 1px solid #3671e9;
`
