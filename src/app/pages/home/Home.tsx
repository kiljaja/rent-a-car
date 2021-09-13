import styled from 'styled-components';
import tw from 'twin.macro';
import { BookCard } from './BookCard';
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
    
    <HeroBanner></HeroBanner>
    <BookCard />
  </Container>;
}
