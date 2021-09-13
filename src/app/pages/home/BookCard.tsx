import { faCalendarAlt, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled, { css } from 'styled-components';
import tw from 'twin.macro';
import { Button } from '../../components/button/Button';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useState } from 'react';

interface ArrowIconProps {
  isOpen: boolean;
}

const Container = styled.div`
  max-width: 95%;
  ${tw`
    relative
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
    items-center
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

const Name = styled.button`
  ${tw`
    text-xs
    md:text-sm
    text-gray-600
    cursor-pointer
    pr-1
  `}
`;

const OpenStateArrow = styled.span(({ isOpen }: ArrowIconProps) => [
  tw`
    text-gray-700
    fill-current
    text-xs
    md:text-base
    transition duration-500 ease-in-out
    origin-center
  `,
  isOpen && tw`transform origin-center rotate-180`
]);

const LineSeparator = styled.span`
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

const DateCalender = styled(Calendar)`
  position: absolute;
  top: 3.5rem;
  left: 0;

  padding-bottom: 1rem;
  min-width: min-content;
  width: 100%;
  max-width: 90%;
  ${({ isRight = false }: { isRight?: boolean }) =>
    isRight &&
    css`
      left: auto;
      right: 0;
    `}
`;
export function BookCard() {
  const [startDate, setStartDate] = useState(new Date());
  const [isStartOpen, setIsStartOpen] = useState(false);

  const [endDate, setEndDate] = useState(new Date());
  const [isEndOpen, setIsEndOpen] = useState(false);

  const toggleStartCalendar = () => {
    if (isEndOpen) setIsEndOpen(false);
    setIsStartOpen((isOpen) => !isOpen);
  };

  const toggleEndCalendar = () => {
    if (isStartOpen) setIsStartOpen(false);
    setIsEndOpen((isOpen) => !isOpen);
  };
  return (
    <Container>
      <ItemContainer>
        <Icon>
          <FontAwesomeIcon icon={faCalendarAlt} />
        </Icon>
        <Name onClick={toggleStartCalendar}>Pick Up Date</Name>
        <OpenStateArrow isOpen={isStartOpen}>
          <FontAwesomeIcon icon={faCaretDown} />
        </OpenStateArrow>
        {isStartOpen && (
          <DateCalender value={startDate} onChange={setStartDate} />
        )}
      </ItemContainer>
      <LineSeparator />
      <ItemContainer>
        <Icon>
          <FontAwesomeIcon icon={faCalendarAlt} />
        </Icon>
        <Name onClick={toggleEndCalendar}>Return Date</Name>
        <OpenStateArrow isOpen={isEndOpen}>
          <FontAwesomeIcon icon={faCaretDown} />
        </OpenStateArrow>
        {isEndOpen && (
          <DateCalender isRight value={endDate} onChange={setEndDate} />
        )}
      </ItemContainer>
      <ButtonContainer>
        <Button text="Book Your Ride" handleClick={() => null} />
      </ButtonContainer>
    </Container>
  );
}
