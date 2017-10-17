import './container.css'
import React, { Component } from 'react'

import { connect } from 'react-redux'
import { replace, Fragment } from 'redux-little-router'

import MainNavbar from './main-navbar/component'

import Cart from '../cart/container'
import ProductsList from '../products/container'

export class Layout extends Component {
  componentWillMount () {
    if (this.props.currentPath === '/') {
      this.props.dispatch(replace({
        pathname: '/products'
      }))
    }
  }

  render () {
    return (
      <div className="layout-container">
        <MainNavbar cartCount={this.props.cartProducts.length}/>
        <Fragment forRoute="/">
          <div className="routable-container">
            <Fragment forRoute="/products">
              <ProductsList/>
            </Fragment>
            <Fragment forRoute="/cart">
              <Cart/>
            </Fragment>
          </div>
        </Fragment>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  cartProducts: state.cart.products,
  currentPath: state.router.pathname
})

export default connect(mapStateToProps)(Layout)
