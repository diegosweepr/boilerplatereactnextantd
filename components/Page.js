import React from 'react'
import { connect } from 'react-redux'
import {MainWrapper} from './wrapper';
import Prompt from './Prompt'
import Layout  from '../layout';


function Page ({ clock, linkTo, title }) {
  return (
    <React.Fragment>
      <MainWrapper>
        <Layout>
          <Prompt/>
        </Layout>
      </MainWrapper>
    </React.Fragment>
  )
}

export default connect(state => state)(Page)
