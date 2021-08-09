import styled from 'styled-components';
import tw from 'twin.macro';
import { NavBar } from '../../components/NavBar';

const Container = styled.div`
  ${tw`
    flex
    flex-col
    w-full
    items-center
    overflow-x-hidden
  `}
`;

export function Home() {
  return <Container><NavBar></NavBar></Container>;
}
