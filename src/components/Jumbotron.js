import React from 'react';
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';


export default function Jumbotron() {
    return (      
        <Jumbo fluid style={{ textAlign: 'center' }}>
            <Container>
                <h1>Hello, world!</h1>
                <p>
                    This is a simple hero unit, a simple jumbotron-style component for calling
                    extra attention to featured content or information.
                </p>
                <p>
                    <Button variant="primary">Learn more</Button>
                </p>
            </Container>           
        </Jumbo>               
    )
}
