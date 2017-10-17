import 'bootstrap/dist/css/bootstrap.css'

import React from 'react'
import ReactDOM from 'react-dom'

import Layout from './pages/layout/container'
import registerServiceWorker from './registerServiceWorker'

import { Provider } from 'react-redux'
import store from './store'

ReactDOM.render(
  <Provider store={store}>
    <Layout/>
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()
