import React from 'react';
import mystyles from './mystyles.css';
import {connect} from 'dva';
import {Checkbox} from 'antd'
import 'antd/dist/antd.css'
import Child from './Child/child.js'
class MyselfRoute extends React.Component{
  constructor(){
    super();
  }
  render(){
    let {data,status,num}=this.props;
    // console.log(num)
    return (
      <div>
          {
              <Child data={data}/>
          }
          <div><Checkbox onChange={this.handleChange} checked={status}>购物车</Checkbox></div>
          <span>总价:{num}块</span>
      </div>
    );
  }
  componentDidMount(){
      let {dispatch}=this.props
      dispatch({
          type:"myself/getData"
      })
  }
  handleChange=()=>{
      const {
          dispatch
      } = this.props;
      dispatch({
          type: 'myself/Classifycheck'
      })
  }
}

MyselfRoute.propTypes = {
};

export default connect(({myself})=>{
  return myself
})(MyselfRoute);
