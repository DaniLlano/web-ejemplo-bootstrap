import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Imagen from '../assets/img/tipos-de-perro-salchicha.jpg'

const ContainerCards = () => {
  return (
    <div className="d-flex justify-content-around">
        <Card style={{ width: '18rem' }}>
        	<Card.Img variant="top" src={Imagen} />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
        	<Card.Img variant="top" src={Imagen} />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
        	<Card.Img variant="top" src={Imagen} />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    </div>
  )
}

export default ContainerCards