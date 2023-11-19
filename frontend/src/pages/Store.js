import React from 'react'
import { Row, Col } from 'react-bootstrap'
// import {productsArray} from '../productsStore'
import { productsArray } from '../BiteBliss'
import ProductCard from '../components/ProductCard'
const Store = () => {
  return (
    <div className=''>
      <div className='storebanner'>
        <div className='storebannerdata'>
          <div className='store1'>FRESH AND DELICIOUS FOOD DAILY</div>
          <div className='store2'>Lorem Ipsum, Dolor Sit Amet Consectetur Adipisicing Elit. Placeat Labore, Sint Cupiditate Distinctio Tempora Reiciendis.</div>
          <div>
            <button className='storebtn'>
              EXPLORE
            </button>
          </div>
        </div>
      </div>

      <div style={{ color: "white", fontSize: '35px', padding: '15px ', backgroundColor:'#010103' }}>Welcome to our store!</div>
      <div style={{padding:'10px 80px', backgroundColor:'#010103', paddingBottom:'85px'}}>
        <Row xs={1} md={3} className='g-4'>
          {productsArray.map((product, index) => (
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