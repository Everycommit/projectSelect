import Mock from 'mockjs';

let obj={
    data:[
        {
            "tit":"hello"
        }
    ]
}
Mock.mock('/data',()=>{
    return obj
})

export default Mock