import React from 'react';
import styled from 'styled-components';
import { useDispatch } from "react-redux";
import { updateQuantity, removeItem } from "../actions";

// { id, title, src, formattedPrice }

export const CartItem = (props) => {
    console.log('#########props ', props);
    const dispatch = useDispatch();

    const handleQuantity = (event) => {
        const value = event.target.value;
        dispatch(updateQuantity(props, parseInt(value)));
    };

    return (
      <ItemsContainer>
      <form>
        <FlexDiv>
            <h2>{props.title}</h2>
            <Remove onClick={(event) => {dispatch(removeItem(props)); event.preventDefault()}}>❌</Remove>
        </FlexDiv>
        <Quantity>
            <PTag>Quantity: <input type="number"
              min="1"
              value={props.quantity}
              onChange={handleQuantity}
              /></PTag>
            <PTag>Price: {props.formattedPrice}</PTag>
        </Quantity>
      </form>
      </ItemsContainer>
    )
}

//-------------------------------- STYLING --------------------------------

const Remove = styled.button`
    background-color: transparent;
    color: white;
    border: none;

    :hover {
        cursor: pointer;
    }
`;

const ItemsContainer = styled.div`
    border: 2px dashed grey;
    margin: 10px 0;
`;

const FlexDiv = styled.div`
    padding: 10px;
    display: flex;
    justify-content: space-between;
`;

const Quantity = styled.div`
    background-color: purple;
    color: white;
    display: block;
`;

const PTag = styled.p`
    padding: 10px;
    margin: 0;
`;

export default CartItem;