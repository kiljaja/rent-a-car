import React from 'react';
import tw from 'twin.macro';
import styled from 'styled-components';
import './App.css';
import { Home } from './app/pages/home/Home';
import { NavBar } from './app/components/nav-bar/NavBar';

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

function App() {
  return (
    <Container className="App">
      <NavBar></NavBar>
      <Home></Home>
    </Container>
  );
}

export default App;
