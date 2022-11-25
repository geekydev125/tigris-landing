import { HeaderText } from 'src/components/text/header-text'
import { NormalText } from 'src/components/text/normal-text'
import UniversityIcon from '../../../assets/images/University.svg'
import styled from 'styled-components'
import { DeskRoadMap } from 'src/components/roadmap/desktop'
import { MobileRoadMap } from 'src/components/roadmap/mobile'
import { TabletRoadMap } from 'src/components/roadmap/tablet'

const roadmapData = [
  'Tigris DAO Controls \r\n the treasury',
  '100% Of Trading Fees \r\n distributed to the DAO',
  'Tigris is governed by Tigris Governance \r\n NFT Holders',
  'One`s Voting Power\r\n is determined by their governance nFT balance'
]

export const Governance = () => {
  return (
    <GovContainer>
      <HeaderText>Governance</HeaderText>
      <NormalText>
        Buy and sell cryptocurrencies, trusted by 10M wallets with over $30 billion in transactions.
      </NormalText>
      <TigrisDao>
        <Img src={UniversityIcon} alt="university-icon" />
        <DaoText>Tigris Dao</DaoText>
      </TigrisDao>
      <DeskTop>
        <DeskRoadMap data={roadmapData} />
      </DeskTop>
      <Tablet>
        <TabletRoadMap data={roadmapData} />
      </Tablet>
      <Mobile>
        <MobileRoadMap data={roadmapData} />
      </Mobile>
    </GovContainer>
  )
}

const GovContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 3rem;
  padding-top: 6rem;
`

const TigrisDao = styled.div`
  display: flex;
  gap: 1.5rem;
  align-items: center;
  @media screen and (max-width: 540px) {
    gap: 0.875rem;
  }
`

const DaoText = styled.div`
  font-weight: 400;
  font-size: 45px;
  line-height: 55px;
  letter-spacing: 0.01em;
  @media screen and (max-width: 768px) {
    font-size: 30px;
  }
  @media screen and (max-width: 540px) {
    font-size: 20px;
  }
`

const Img = styled.img`
  width: 50px;
  height: 50px;
  @media screen and (max-width: 540px) {
    width: 30px;
    height: 30px;
  }
`

const DeskTop = styled.div`
  display: block;
  width: 100%;
  @media screen and (max-width: 1064px) {
    display: none;
  }
`

const Tablet = styled.div`
  display: none;
  width: 100%;
  @media screen and (max-width: 1064px) {
    display: block;
  }
  @media screen and (max-width: 840px) {
    display: none;
  }
`

const Mobile = styled.div`
  display: none;
  width: 100%;
  @media screen and (max-width: 840px) {
    display: block;
  }
`
