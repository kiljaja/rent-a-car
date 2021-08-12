import styled from 'styled-components';
import tw from 'twin.macro';

import carImg from '../../../assets/images/mclaren-orange-big.png';
import blobImg from '../../../assets/images/blob.svg';
import { SCREENS } from '../../utils/responsive/screen-data';
import { Button } from '../../components/button/Button';

const Container = styled.header`
  min-height: 400px;
  ${tw`
    flex
    justify-between
    mt-24
    w-full
    max-w-screen-2xl
    px-3
    lg:px-12
  `}
`;

const LeftSide = styled.div`
  ${tw`
    flex
    flex-col
    w-1/2
  `}
`;

const RightSide = styled.div`
  ${tw`
    relative
    flex
    flex-col
    mt-20
    w-1/2
  `}
`;

const Slogan = styled.h1`
  ${tw`
    mb-4
    text-3xl
    md:text-5xl
    lg:text-6xl
    font-bold
    font-extrabold
    lg:font-black
    leading-snug
    md:leading-normal
    lg:leading-relaxed
    text-black
  `}
`;

const Description = styled.p`
  ${tw`
    overflow-hidden
    max-h-12
    sm:max-h-full
    text-xs
    lg:text-sm
    xl:text-lg
    text-gray-800
  `}
`;

const BlobContainer = styled.div`
  z-index: -1;
  transform: rotate(-30deg);
  ${tw`
    absolute
    -right-20
    -top-36
    w-80
    h-40
  `}
  img {
    width: 100%;
    height: auto;
    max-height: max-content;
  }

  @media (min-width: ${SCREENS.sm}) {
    width: 40em;
    max-height: 10em;
    right: -9em;
    top: -16em;
    transform: rotate(-25deg);
  }
  @media (min-width: ${SCREENS.lg}) {
    width: 50em;
    max-height: 30em;
    right: -7em;
    top: -15em;
    transform: rotate(-30deg);
  }
  @media (min-width: ${SCREENS.xl}) {
    width: 70em;
    max-height: 30em;
    right: -15em;
    top: -25em;
    transform: rotate(-20deg);
  }
`;

const Car = styled.div`
  ${tw`
    absolute
    -right-24
    -top-20
    h-40
  `}

  img {
    height: 100%;
    max-height: fit-content;
  }

  @media (min-width: ${SCREENS.sm}) {
    height: 16em;
    right: -6em;
    top: -6em;
  }
  @media (min-width: ${SCREENS.lg}) {
    height: 21em;
    right: -8em;
    top: -5em;
  }
  @media (min-width: ${SCREENS.xl}) {
    height: 30em;
    right: -13em;
    top: -9em;
  }
`;

const ButtonContainer = styled.div`
  ${tw`
    flex
    flex-wrap
    mt-4
    max-w-screen-md
  `}
`;

export function HeroBanner() {
  return (
    <Container>
      <LeftSide>
        <Slogan>Rent your next car with us</Slogan>
        <Description>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste fugiat
          ea officia ut illum quae quia delectus, odit, nemo ex eius maiores
          velit, aperiam itaque rerum temporibus laboriosam suscipit deleniti!
        </Description>
        <ButtonContainer>
          <Button text="Book Your Ride" handleClick={() => null} />
          <Button
            text="Rent Your Ride"
            theme="filled"
            handleClick={() => null}
          />
        </ButtonContainer>
      </LeftSide>
      <RightSide>
        <BlobContainer>
          <img src={blobImg} alt="blob" />
        </BlobContainer>
        <Car>
          <img src={carImg} alt="car" />
        </Car>
      </RightSide>
    </Container>
  );
}
