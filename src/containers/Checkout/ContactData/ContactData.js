import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import Button from '../../../components/UI/Button/Button'
import Spinner from '../../../components/UI/Spinner/Spinner'
import styles from './ContactData.module.css'
import axios from '../../../axios-order'

class ContactData extends Component {
  state = {
    name: '',
    email: '',
    address: {
      street: '',
      postCode: '',
    },
    loading: false,
  }

  orderHandler = (event) => {
    event.preventDefault()
    this.setState({ loading: true })
    let { name, email, address } = this.state
    const { ingredients, totalPrice, history } = this.props
    name = 'Ricardo Gallardo'
    email = 'test@test.com'
    address = {
      street: 'Fake street',
      postCode: 'wbest',
      country: 'United Kingdom',
    }

    const order = {
      ingredients,
      totalPrice,
      customer: {
        name,
        email,
        address,
      },
      deliveryMethod: 'fastest',
    }
    axios
      .post('/orders.json', order)
      .then(() => {
        this.setState({ loading: false })
        history.push('/')
      })
      .catch(() => this.setState({ loading: false }))
  }

  render() {
    const { loading } = this.state
    const form = loading ? (
      <Spinner />
    ) : (
      <div className={styles.ContactData}>
        <form>
          <h4>Enter your contact data</h4>
          <input
            className={styles.Input}
            type="text"
            name="name"
            placeholder="Your name"
          />
          <input
            className={styles.Input}
            type="email"
            name="email"
            placeholder="Your email"
          />
          <input
            className={styles.Input}
            type="text"
            name="street"
            placeholder="Street"
          />
          <input
            className={styles.Input}
            type="text"
            name="post"
            placeholder="Post Code"
          />
          <Button btnType="Success" clicked={this.orderHandler}>
            Order
          </Button>
        </form>
      </div>
    )
    return form
  }
}

ContactData.propTypes = {
  ingredients: PropTypes.objectOf(PropTypes.number).isRequired,
  totalPrice: PropTypes.number.isRequired,
  history: PropTypes.objectOf(PropTypes.any).isRequired,
}

export default withRouter(ContactData)
