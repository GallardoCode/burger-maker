import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import Button from '../../../components/UI/Button/Button'
import Spinner from '../../../components/UI/Spinner/Spinner'
import Input from '../../../components/UI/Input/Input'
import styles from './ContactData.module.css'
import axios from '../../../axios-order'

class ContactData extends Component {
  state = {
    orderForm: {
      name: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Your Name',
        },
        value: '',
      },
      email: {
        elementType: 'input',
        elementConfig: {
          type: 'email',
          placeholder: 'Your Email',
        },
        value: '',
      },
      street: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Street',
        },
        value: '',
      },
      postCode: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Post Code',
        },
        value: '',
      },
      country: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Country',
        },
        value: '',
      },
      deliveryMethod: {
        elementType: 'select',
        elementConfig: {
          options: [
            { value: 'fastest', displayValue: 'Fastest' },
            { value: 'cheapest', displayValue: 'Cheapest' },
          ],
        },
        value: '',
      },
    },
    loading: false,
  }

  onChangeHandler = (event, id) => {
    const {
      target: { value },
    } = event
    this.setState((prevState) => ({
      ...prevState,
      orderForm: {
        ...prevState.orderForm,
        [id]: {
          ...prevState.orderForm[id],
          value,
        },
      },
    }))
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
    const { loading, orderForm } = this.state
    const formArray = [...Object.entries(orderForm)]
      .map((v) => ({
        id: v[0],
        ...v[1],
      }))
      .map((elemObj) => (
        <Input
          key={elemObj.id}
          elementType={elemObj.elementType}
          elementConfig={elemObj.elementConfig}
          value={elemObj.value}
          change={(event) => {
            this.onChangeHandler(event, elemObj.id)
          }}
        />
      ))
    const form = loading ? (
      <Spinner />
    ) : (
      <div className={styles.ContactData}>
        <form>
          <h4>Enter your contact data</h4>
          {formArray}
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
