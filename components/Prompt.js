/* eslint-disable */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import actions from '../lib/prompt/actions'
const { changeTitle } = actions;
import { Card } from 'antd';

class Prompt extends Component {

    static async getInitialProps(props){

    }


   constructor (props){
    super(props);
    this.state ={
    }
   }
   componentDidMount(){
     const {changeTitle} = this.props;
     changeTitle('Prueba');
   }

  render() {
  const { title } = this.props;
    return (
      <div>
        <style jsx>{`
          div {
            padding: 0 0 20px 0;
          }
        `}</style>
        <Card title="Default size card" extra={<a href="#">More</a>} style={{ width: 300 }}>
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content</p>
        </Card>
        {title}
      </div>
    )
  }
}

function mapStateToProps(st) {
    //console.log(st);
    const {title} = st.prompt;
    //console.log(title);
    return { title }
}
export default connect(mapStateToProps,{ changeTitle  })(Prompt)
