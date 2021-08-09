import styled from 'styled-components';
import tw from 'twin.macro';
import { slide as Menu } from 'react-burger-menu';
import { useMediaQuery } from 'react-responsive';
import { SCREENS } from '../../utils/responsive';
import { HAMBURGER_STYLES } from './hamburger-styles';

const List = styled.ol`
  ${tw`
    flex
  `}
`;

const Item = styled.li`
  ${tw`
    mr-1
    mb-3
    sm:mb-0
    sm:mr-5
    md:text-base
    font-medium
    text-white
    sm:text-black
    focus:text-white
    cursor-pointer
    transition
    duration-300
    ease-in-out
    hover:text-gray-300
  `}
`;

const itemList = (
  <List>
    <Item>
      <a href="#">Home</a>
    </Item>
    <Item>
      <a href="#">Cars</a>
    </Item>
    <Item>
      <a href="#">Services</a>
    </Item>
    <Item>
      <a href="#">Contact Us</a>
    </Item>
  </List>
);
export function NavItems() {
  const isMobile = useMediaQuery({ maxWidth: SCREENS.sm });

  if (isMobile)
    return (
      <Menu right styles={HAMBURGER_STYLES}>
        <List>
          <Item>
            <a href="#">Home</a>
          </Item>
          <Item>
            <a href="#">Cars</a>
          </Item>
          <Item>
            <a href="#">Services</a>
          </Item>
          <Item>
            <a href="#">Contact Us</a>
          </Item>
        </List>
      </Menu>
    );

  return (
    <List>
      <Item>
        <a href="#">Home</a>
      </Item>
      <Item>
        <a href="#">Cars</a>
      </Item>
      <Item>
        <a href="#">Services</a>
      </Item>
      <Item>
        <a href="#">Contact Us</a>
      </Item>
    </List>
  );
}
