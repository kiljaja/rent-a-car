import styled from 'styled-components';
import tw from 'twin.macro';
import { BookCard } from '../../components/book-card/BookCard';
import { NavBar } from '../../components/nav-bar/NavBar';
import { HeroBanner } from './HeroBanner';

const Container = styled.div`
  ${tw`
    flex
    flex-col
    w-full
    h-full
    items-center
    overflow-x-hidden
  `}
`;

export function Home() {
  return <Container>
    <NavBar></NavBar>
    <HeroBanner></HeroBanner>
    <BookCard />
  </Container>;
}
