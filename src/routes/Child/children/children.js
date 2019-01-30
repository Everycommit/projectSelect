import React from 'react';
import {connect} from 'dva';
import {Checkbox} from 'antd';
class Children extends React.Component{
  render(){
      let {datas}=this.props
    return (
      <div>
          {
              datas.map((val,ind)=>{
                //   console.log(val);
                  return <div key={ind} style={{marginLeft:50}}>
                        <Checkbox checked={val.status} onChange={()=>{this.handleChange(val.id)}}>{val.tit}{val.price}</Checkbox>
                    </div>
              })
          }
      </div>
    );
  }
  handleChange=(id)=>{
    const {
        dispatch
    } = this.props;
    dispatch({
        type: 'myself/children',
        payload: id
    })
  }
}

Children.propTypes = {
};

export default connect(({myself})=>{
  return myself
})(Children);
