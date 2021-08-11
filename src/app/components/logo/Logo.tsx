import logo from '../../../assets/images/car-logo.png'
import styled from 'styled-components';
import tw from 'twin.macro';

const Container = styled.div`
  ${tw`
    flex
    items-center
  `}
`;

const LogoText = styled.span`
  ${tw`
    m-1
    text-xl
    md:text-2xl
    text-black
    font-bold
  `}
`;

const Image = styled.div`
  width: auto;
  ${tw`
    h-6
    md:h-9
  `}
  img {
    width: auto;
    height: 100%;
  }
`;

export function Logo(){
  return <Container>
    <Image>
      <img src={logo} alt="Car" loading="eager"/>
    </Image>
    <LogoText>
      Your Car
    </LogoText>
  </Container>
}