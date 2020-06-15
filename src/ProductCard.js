import React from 'react';
import Card from 'react-bootstrap/Card';
import Products from './pacelabace.json';
import Container from 'react-bootstrap/Container';
import './ProductCard.css';

export default function ProductCard(product) {
    
    return(
        <div>
        <Container class="container">
                {Products.map((product) => (             
                    <Card class="card">
                        <Card.Img
                            src={product.image}
                        />
                        <Card.Title>
                            {product.name}
                        </Card.Title>
                        <Card.Text>
                            {product.description}
                        </Card.Text>
                        <a href={product.link} class="stretched-link"></a>
                    </Card>
                ))}
        </Container>
        </div>
    )   
}