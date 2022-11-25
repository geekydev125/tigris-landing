import styled from 'styled-components';

import { ContentContainer } from 'src/components/container/content-container';
import { Marker } from 'src/components/marker/Marker';

import { LANDING_BG, LANDING_TABLET, LANDING_MOBILE } from 'src/config/images';
import { Markers } from 'src/constants/markers';

export const LandingBackground = () => {
  return (
    <LandBgContainer>
      <ContentContainer>
        <MarkerContent>
          {Markers.map((marker, index) => {
            const symbol = marker.symbol === '' ? null : marker.symbol;

            return (
              <Marker icon={marker.icon} name={marker.name} symbol={symbol} className={marker.className} key={index} />
            );
          })}
        </MarkerContent>
      </ContentContainer>
      <Background />
    </LandBgContainer>
  );
};

const LandBgContainer = styled.div`
  position: absolute;
  bottom: 0;

  width: 100%;
  max-width: 1440px;
  overflow: hidden;

  height: 700px;

  z-index: 0;

  @media screen and (max-width: 768px) {
    height: 900px;
  }

  @media screen and (max-width: 425px) {
  }
`;

const Background = styled.div`
  width: 100%;
  height: 100%;

  background-image: url(${LANDING_BG});
  background-size: 120% 100%;
  background-repeat: no-repeat;

  position: absolute;
  bottom: 0;
  left: 0;

  @media (max-width: 1024px) {
    background-position: 0px 90px;
  }

  @media screen and (max-width: 768px) {
    background-position: 0px 180px;
    background-image: url(${LANDING_TABLET});
  }

  @media screen and (max-width: 700px) {
    background-position: 0px 200px;
  }

  @media screen and (max-width: 630px) {
    background-position: 0px 220px;
  }

  @media screen and (max-width: 425px) {
    background-image: url(${LANDING_MOBILE});
  }
`;

const MarkerContent = styled.div`
  position: relative;
  width: 100%;
  height: 680px;

  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-items: stretch;

  gap: 40px;

  overflow: hidden;

  z-index: 2;

  .bitcoin {
    top: 20%;
    right: 20%;
  }

  .euro {
    top: 40%;
    right: 5%;
  }

  .gold {
    top: 65%;
    right: 25%;
  }

  @media (max-width: 1024px) {
    .bitcoin {
      top: 40%;
      right: 17%;
    }

    .euro {
      top: 60%;
      right: 5%;
    }

    .gold {
      top: 70%;
      right: 28%;
    }
  }

  @media screen and (max-width: 768px) {
    margin-top: 300px;
    .bitcoin {
      top: 30%;
      right: 20%;
    }

    .euro {
      top: 50%;
      right: 5%;
    }

    .gold {
      top: 62%;
      right: 50%;
    }
  }

  @media screen and (max-width: 700px) {
    .bitcoin {
      top: 30%;
      right: 20%;
    }

    .euro {
      top: 62%;
      right: 5%;
    }

    .gold {
      top: 50%;
      right: 50%;
    }
  }

  @media screen and (max-width: 580px) {
    .bitcoin {
      top: 40%;
      right: 0%;
    }

    .euro {
      top: 55%;
      right: 45%;
    }

    .gold {
      top: 65%;
      right: 20%;
    }
  }
`;
