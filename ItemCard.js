// src/components/ItemCard.js
import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



const ItemCard = ({ item, addToCart }) => {
  return (
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={item.image} alt={item.name} />
                <Card.Body>
                <div className="item-card">
                <Card.Title><h2>{item.name}</h2></Card.Title>
                <Card.Text>
                
                
                
                <p>Price: Rs:{item.price}</p>
                <Button variant="primary" onClick={() => addToCart(item)}>Add to Cart</Button>
                
                </Card.Text>
                </div>
                </Card.Body>
                </Card>



   
  );
};

export default ItemCard;
