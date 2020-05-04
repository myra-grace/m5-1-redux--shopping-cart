import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';

import CartItem from '../components/CartItem';
import { getStoreItemArray, cartTotal } from '../reducers/index';
import { clearCart } from '../actions';
import Button from './Button';

const Cart = () => {
    const [totalPrice, setTotalPrice] = useState('0.00');
    const state = useSelector(getStoreItemArray);
    const total = useSelector(cartTotal);

    const dispatch = useDispatch();

    let itemIndex = state.length -1;
    let getObject = state[itemIndex];
    console.log('getObject: ', getObject);

    console.log('--------state: ', state);

    const handleTotalPrice = () => {
        if (total === 0) {
            return
        } else {
            setTotalPrice(total)
        }
        return 
    }

    const handleClearCart = () => {
        dispatch(clearCart());
        setTotalPrice('0.00');
    }
    
    useEffect(() => {
        return handleTotalPrice();
    }, [state]);

    return (
      <Wrapper>
          <h1>Your Cart</h1>
          <p>{state.length} Item</p>
            {state.map((item) => <CartItem key={item} {...item}/>)}

            <FlexDiv>
                <Total>Total: ${totalPrice}</Total>
                <Button style={{margin: '10px'}}>Purchase</Button>
                <Button onClick={handleClearCart}>Clear Cart</Button>
            </FlexDiv>

      </Wrapper>
    );
  };

//-------------------------------- STYLING --------------------------------

const Wrapper = styled.div`
    padding: 10px;
    display: block;
    background-color: rgb(37, 0, 90, 0.5);
    height: 100%;
`;

const FlexDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Total = styled.p`
    font-size: 20px;
    padding: 10px;
    margin-right: 10px;
`;

export default Cart;