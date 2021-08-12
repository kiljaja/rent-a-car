import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import tw from 'twin.macro';
import { Button } from '../button/Button';

const Container = styled.div`
  ${tw`
    flex
    justify-items-center
    items-center
    shadow
    rounded
    bg-white
    py-1
    md:py-2
    px-1
    md:px-6
  `}
`;

const ItemContainer = styled.div`
  ${tw`
    flex
  `}
`;

const Icon = styled.span`
  ${tw`
    mr-1
    md:mr-3
    fill-current
    text-xs
    md:text-base
    text-red-500
    
    
  `}
`;

const Name = styled.span`
  ${tw`
    text-xs
    md:text-sm
    text-gray-600
  `}
`;

const LineSeperator = styled.span`
  width: 2px;
  height: 45%;
  ${tw`
    mx-2
    md:mr-5
    bg-gray-300
  `}
`;

const ButtonContainer = styled.div`
  ${tw`
  ml-2
`}
`;
export function BookCard() {
  return (
    <Container>
      <ItemContainer>
        <Icon>
          <FontAwesomeIcon icon={faCalendarAlt} />
        </Icon>
        <Name>Pick Up Date</Name>
      </ItemContainer>
      <LineSeperator />
      <ItemContainer>
        <Icon>
          <FontAwesomeIcon icon={faCalendarAlt} />
        </Icon>
        <Name>Return Date</Name>
      </ItemContainer>
      <ButtonContainer>
        <Button text="Book Your Ride" handleClick={() => null} />
      </ButtonContainer>
    </Container>
  );
}
