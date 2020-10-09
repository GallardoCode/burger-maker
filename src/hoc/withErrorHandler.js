/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable camelcase */
import React, { Component } from 'react'
import Modal from '../components/UI/Modal/Modal'
import Auxiliary from './Auxiliary'

const withErrorHandler = (WrappedComponent, axios) => {
  return class extends Component {
    state = {
      error: null,
    }

    UNSAFE_componentWillMount() {
      this.reqInterceptor = axios.interceptors.request.use((req) => {
        this.setState({ error: null })
        return req
      })
      this.reqInterceptor = axios.interceptors.response.use(
        (res) => res,
        (error) => {
          this.setState({ error: error.stack })
        }
      )
    }

    componentWillUnmount() {
      axios.interceptors.request.eject(this.reqInterceptor)
      axios.interceptors.response.eject(this.reqInterceptor)
    }

    errorConfirmedHandler = () => {
      this.setState({ error: null })
    }

    render() {
      const { error } = this.state
      return (
        <Auxiliary>
          <WrappedComponent {...this.props} />
          <Modal
            show={error !== null}
            clickOutside={this.errorConfirmedHandler}
          >
            {error || null}
          </Modal>
        </Auxiliary>
      )
    }
  }
}

export default withErrorHandler
