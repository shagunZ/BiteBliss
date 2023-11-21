import React, { useState, useEffect } from 'react'
import { Row, Col, Form } from 'react-bootstrap'
// import {productsArray} from '../productsStore'
import { productsArray } from '../BiteBliss'
import ProductCard from '../components/ProductCard'
const Store = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    filterProducts(query);
  };

  const filterProducts = (query) => {
    const filtered = productsArray.filter((product) =>
      product.FOOD_AVAILABLE.some((food) => food.toLowerCase().includes(query))
    );
    setFilteredProducts(filtered);
  };
  useEffect(() => {
    setFilteredProducts(productsArray);
  }, []);

  return (
    <div className=''>
      <div className='storebanner'>
        <div className='storebannerdata'>
          <div className='store1'>FIND THE FOOD YOU HAVE BEEN LOOKING FOR !!</div>
          <div className='store2'>For the adventurers of FOOD</div>
          <div>
            <button className='storebtn'>
              EXPLORE
            </button>
          </div>
        </div>
      </div>

      <div style={{ color: "white", fontSize: '35px', padding: '15px ', backgroundColor: '#010103' }}>Welcome to BiteBliss!</div>
      <div style={{backgroundColor:'#010103', padding:'42px 84px'}}>
        <Form className='mb-3 container' style={{ width: "50%",backgroundColor:'#010103' }}>
          <Form.Control
            type='text'
            placeholder='Search by food item'
            value={searchQuery}
            onChange={handleSearch}
          />
        </Form>
        <Row xs={1} md={3} className='g-4'>
          {filteredProducts.map((product, index) => (
            <Col align="center" key={index}>
              <ProductCard product={product} />
            </Col>
          ))}
        </Row>
      </div>
    </div>

  )
}

export default Store