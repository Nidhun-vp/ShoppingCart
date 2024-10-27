import React from 'react'
import products from './Items';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
//import './Productlistgrid.css'
import Container from 'react-bootstrap/Container';


function Productlistgrid() {
  return (
    <div>
        <Container className="bg-dark">
        <Row>
        {products.map((product)=>(
            <Col key={product.id} md={4} className="mb-4 mt-4">
                <Card>
                  <Card.Img  variants="top" src={product.imageUrl}/>
                    <Card.Body>
                        <Card.Title>{product.name}</Card.Title>
                        <Card.Text>{product.description}</Card.Text>

                        

                    </Card.Body>
                    
                  
                </Card>
            </Col>    

       ) )}
       </Row>
       </Container>
    </div>
  );
    
  
}

export default Productlistgrid
