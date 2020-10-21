import React, { Component } from 'react'
import Order from '../../components/Order/Order'
import Spinner from '../../components/UI/Spinner/Spinner'
import axios from '../../axios-order'
import withErrorHandler from '../../hoc/withErrorHandler'

class Orders extends Component {
  state = {
    orders: [],
    loading: true,
  }

  componentDidMount() {
    axios
      .get('/orders.json')
      .then((response) => {
        const orders = Object.entries(response.data).map((v) => ({
          id: v[0],
          ...v[1],
        }))
        this.setState({ loading: false, orders })
      })
      .catch(() => {
        this.setState({ loading: false })
      })
  }

  render() {
    const { orders, loading } = this.state
    const orderElms = loading ? (
      <Spinner />
    ) : (
      orders.map((order) => (
        <Order
          key={order.id}
          ingredients={order.ingredients}
          price={+order.totalPrice}
        />
      ))
    )
    return <div>{orderElms}</div>
  }
}

export default withErrorHandler(Orders, axios)
