import React, { Component } from 'react'

import { Table, Row, Col } from 'reactstrap'
import { connect } from 'react-redux'

import CartRow from './cart-row/component'

export class Cart extends Component {
  render () {
    const products = this.props.products.map((product, idx) => <CartRow key={idx} product={product}/>)

    return (
      <div className="products-container">
        <Row>
          <Table bordered={true} striped={true}>
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              {products}
            </tbody>
          </Table>
        </Row>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  products: state.cart.products
})

export default connect(mapStateToProps)(Cart)
