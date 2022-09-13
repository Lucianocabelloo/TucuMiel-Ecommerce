import React from 'react'
import "./Estilos.css"
import Card from 'react-bootstrap/Card';
import ItemCount from '../ItemCount/ItemCount';
import { useNavigate } from 'react-router-dom';

const Item = ({productoAMostrar}) => {
    const  navigate = useNavigate();
    const handleNavigate = () =>{
        navigate(`/detail/${productoAMostrar.id}`)
    }
//console.log(productoAMostrar)
    const agregarAlCarrito = (cantidad) =>{
        //console.log(`Se Agrego ${cantidad} al carrito`)
    }
    return(
<>
        <Card style={{ width: '18rem' }} onClick={handleNavigate}>
            <Card.Img className='img' variant="top" src={productoAMostrar.image} height={250} width={250}/>
                <Card.Body>
            <Card.Title>{productoAMostrar.title}</Card.Title>
            <Card.Text className='cardDescription'>
            {productoAMostrar.description}
            </Card.Text>
            <Card.Text>
            ${productoAMostrar.price}
            </Card.Text>
                </Card.Body>
                <ItemCount initial={1} stock={5} onAdd={agregarAlCarrito}/>
        </Card>
        </>
)
}

export default Item;