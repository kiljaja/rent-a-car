import styled from 'styled-components';
import tw from 'twin.macro';
import { Logo } from '../logo/Logo';
import { NavItems } from './NavItems';

const Container = styled.nav`
  min-height: 68px;
  ${tw`
    flex
    items-center
    justify-between
    overflow-x-hidden
    w-full
    max-w-screen-2xl
    lg:px-12
  `}
`;

const LogoContainer = styled.div``;

export function NavBar() {
  return (
    <Container>
      <LogoContainer>
        <Logo></Logo>
      </LogoContainer>
      <NavItems></NavItems>
    </Container>
  );
}
