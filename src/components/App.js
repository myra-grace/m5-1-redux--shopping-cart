import React from 'react';
import styled from 'styled-components';

import Logo from './Logo';
import ItemGrid from './ItemGrid';
import Cart from './Cart';
import GlobalStyles from './GlobalStyles';

const App = () => {
  return (
    <Wrapper>
      <Container>
        <Header>
          <Logo />
        </Header>
        <ItemGridWrapper>
          <ItemGrid />
        </ItemGridWrapper>
      </Container>
      <CartWrapper>
        <Cart />
      </CartWrapper>
      <GlobalStyles />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  display: flex
`;

const Container = styled.div`
  position: relative;
  flex-grow: 3;
`;

const Header = styled.header`
  grid-area: header;
  padding: 32px 64px;
`;

const ItemGridWrapper = styled.main`
  grid-area: main;
  padding: 16px 64px;
`;

const CartWrapper = styled.div`
  grid-area: sidebar;
  border-left: 3px dashed #ff406e;
  padding-left: 8px;
  flex-grow: 1;
`;

// const Wrapper = styled.div`
//   position: relative;
//   display: grid;
//   grid-template-areas:
//     'header header header sidebar'
// `;

export default App;
