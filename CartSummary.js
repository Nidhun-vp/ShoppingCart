// src/components/CartSummary.js
import React from "react";
import Card from 'react-bootstrap/Card';

const CartSummary = ({ totalItems, totalPrice }) => {
  return (
    <div className="cart-summary" >
      <center>
    <Card border="danger" style={{ width: '18rem' }}>
    <Card.Header><h2>Cart Summary</h2></Card.Header>
    <Card.Body>
      <Card.Title><p>Total Items: {totalItems}</p></Card.Title>
      <Card.Text>
      <p>Total Price: RS:{totalPrice}</p>
      </Card.Text>
    </Card.Body>
  </Card>
  </center>
   
    
      
      
     
    </div>
  );
};

export default CartSummary;
