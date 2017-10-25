import './container.css'
import React, { Component } from 'react'

import { connect } from 'react-redux'
import { Row, Col } from 'reactstrap'

import { addToCart } from '../cart/actions'

import ProductCard from './product-card/component'

export class Layout extends Component {
  handleAddToCart = (product) => {
    this.props.dispatch(addToCart(product))
  }

  render () {
    const products = this.props.products.map((product) => (
      <Col key={product.id}>
        <ProductCard onAddToCart={this.handleAddToCart} product={product}/>
      </Col>
    ))

    return (
      <div className="products-container">
        <Row>
          {products} Products
        </Row>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  products: state.products.data
})

export default connect(mapStateToProps)(Layout)
