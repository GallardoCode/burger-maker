import React from 'react'
import Layout from './components/Layout/Layout'
import BurgerMaker from './containers/BurgerMaker/BurgerMaker'

function App() {
  return (
    <div>
      <Layout>
        <BurgerMaker />
      </Layout>
    </div>
  )
}

export default App
