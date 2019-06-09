import React from 'react'

import { connect } from 'react-redux'

import App from '../components/App'
//import Header from '../components/Header'
import Page from '../components/Page'

class PageIndex extends React.Component {
  static async getInitialProps ({ ctx: { store } }) {
    
  }

  componentDidMount () {
  
  }

  render () {
    return (
      <App>
        {/* <Header /> */}
        <Page title='Home Page' />
      </App>
    )
  }
}

export default connect()(PageIndex)
