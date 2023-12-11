import React from 'react'
import { useContext, useState, useEffect } from 'react';
import { CartContext } from '../CartContext';
import { Card, Button, Form, Row, Col } from 'react-bootstrap'
import { CDBBtn } from "cdbreact";
import '../App.css'
const ProductCard = (props) => {


    const product = props.product;
    const cart = useContext(CartContext)
    const productQuantity = cart.getProductQuantity(product._id)
    console.log(cart.items);
    return (
        <Card className='container py-5' style={{ backgroundColor: '#010103', border: '2px solid yellow' }}>
            <Card.Img variant="top" style={{ height: '15rem' }} src={product.img} />
            <Card.Body className='flex-column'>

                <Card.Title><b>{product.PLACE_NAME}</b><p>{product.TYPE}</p></Card.Title>
                <hr></hr>
                <Row>
                    <Row>
                        <Card.Text style={{ color: "yellow", fontFamily: 'sans-serif', fontSize: '20px' }}>Rs. {product.PRICE}</Card.Text>
                    </Row>
                    <Col>
                        <Card.Text
                            style={{
                                color: 'white',
                                fontFamily: 'sans-serif',
                                fontSize: '20px',
                                maxHeight: '150px', // Set a maximum height for the FOOD_AVAILABLE section
                                overflowY: 'auto', // Enable the scrollbar if content exceeds the maximum height
                            }}
                        >

                            {product.FOOD_AVAILABLE.map((food, foodIndex) => (
                                <div key={foodIndex}>{food}</div>
                            ))}
                        </Card.Text>
                        <CDBBtn color='#ecdba7' onClick={() => window.open(product.MapLocation, '_blank')} className="my-2 cdbtn" 
                        style={{ color:"white",fontSize:"larger", transition: 'background-color 0.5s'}}
                            >
                            Visit our Store
                        </CDBBtn>


                    </Col>
                    {/* <Col>
                        {productQuantity > 0 ?
                            <>
                                <Form as={Row} style={{ justifyContent: "center" }}>
                                    <Form.Label column="true" sm="6" style={{ color: "brown" }}>Cart: {productQuantity}</Form.Label>
                                    <Row>
                                        <Col sm="6">
                                            <Button sm="6" onClick={() => cart.addOneToCart(product.id)} className="mx-2">+</Button>
                                        </Col>
                                        <Col sm="6">
                                            <Button sm="6" onClick={() => cart.removeOneFromCart(product.id)} className="mx-2">-</Button>
                                        </Col>
                                    </Row>
                                </Form>
                                <CDBBtn color='warning' onClick={() => cart.deleteFromCart(product.id)} className="my-2">Remove from cart</CDBBtn>
                            </>
                            :
                            <div style={{backgroundColor:'#ffc107', padding:'5px 7px', fontFamily:'sans-serif', fontSize:'17px', borderRadius:'6px', color:"white"}} onClick={() => cart.addOneToCart(product.id)}>ADD TO CART</div>
                        }

                    </Col> */}
                </Row>
            </Card.Body>
        </Card>
    )
}

export default ProductCard