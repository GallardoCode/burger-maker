import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://burgermaker-40fdd.firebaseio.com/',
})

export default instance
