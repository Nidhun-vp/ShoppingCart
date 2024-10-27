import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import items from "./components/Data";
import ItemCard from "./components/ItemCard";
import CartSummary from "./components/CartSummary";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {
  const [cart, setCart] = useState([]);
  const [totalItems, setTotalItems] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const addToCart = (item) => {
    setCart([...cart, item]);
    setTotalItems(totalItems + 1);
    setTotalPrice(totalPrice + item.price);
  };

  return (
    <div className="App">
      <h1>Shopping Cart</h1>
      <Container className="bg-dark">
        <Row>
        
          {items.map((item) => (
             <Col key={item.id} md={3} className="mb-4 mt-4">
            <div className="col-md-3" key={item.id}>
             <ItemCard item={item} addToCart={addToCart} />
            </div>
            </Col>
          ))}
       
       </Row>
       </Container>
      <CartSummary totalItems={totalItems} totalPrice={totalPrice} />
      
    </div>

    
  );
}

export default App;
