import React from 'react'
import { Route } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import BurgerMaker from './containers/BurgerMaker/BurgerMaker'
import Checkout from './containers/Checkout/Checkout'
import Orders from './containers/Orders/Orders'

function App() {
  return (
    <div>
      <Layout>
        <Route path="/checkout" component={Checkout} />
        <Route path="/orders" component={Orders} />
        <Route path="/" exact component={BurgerMaker} />
      </Layout>
    </div>
  )
}

export default App
