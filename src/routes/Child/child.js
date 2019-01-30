import React from 'react';
import {connect} from 'dva';
import Children from './children/children.js'
import {Checkbox} from 'antd';
class Child extends React.Component{
  render(){
      let {data}=this.props
    //   console.log(data)
    return (
      <div>
          {
              data.map((val,ind)=>{
                return <div style={{marginLeft:50}} key={ind}>
                    <Checkbox checked={val.status} onChange={()=>{this.handleChang(val.id)}} checked={val.status}>{val.tit}</Checkbox>
                    <Children datas={val.shops}/>
                </div>
              })
          }
      </div>
    );
  }
  handleChang=(id)=>{
    const {
        dispatch
    } = this.props;
    dispatch({
        type: 'myself/child',
        payload: id
    })
  }
}

Child.propTypes = {
};


export default connect(({myself})=>{
  return myself
})(Child);
