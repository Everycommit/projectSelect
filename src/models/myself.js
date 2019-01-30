import {requesQuery} from '../services/example';
export default {

    namespace: 'myself',
  
    state: {
        data:[],
        status:false,
        count:0
    },
  
    subscriptions: {
      setup({ dispatch, history }) {  // eslint-disable-line
      },
    },
  
    effects: {
      *getData({ payload }, { call, put}) {  // eslint-disable-line
            let data=yield call(requesQuery);
            // console.log(data);
            yield put({ 
                type: 'save',
                payload: {data:data.listData}
            });
            yield put({
                type:'Countprice'
            })
      },
      *children({payload},{call,put,select}){
            // console.log(payload);
            let data=yield select((store)=>{
                return store.myself.data
            })
            // console.log(data);
            let status=yield select((store)=>{
                return store.myself.status
            })
            let flag=true;
            let newId = payload.split('_')[0];
            let newData=data.map((val,ind)=>{
                if(newId==val.id){
                    val.shops.forEach((v,i)=>{
                        if(v.id==payload){
                            v.status=!v.status
                        }
                        return val;
                    })
                    // console.log(JSON.stringify(val.shops))
                    if(JSON.stringify(val.shops).indexOf('false') > -1){
                        val.status=false;
                        flag=false;
                    }else{
                        val.status=true;
                    }
                }
                if(!val.status){
                    flag=false;
                }
                return val
            })
            yield put({
                type: 'save',
                payload:{
                    data:newData
                }
            })
            yield put({
                type:'classify',
                payload:{
                    status:flag
                }
            })
            yield put({
                type:'Countprice'
            })
      },
      *child({payload},{call , put , select}){
            let data=yield select((store)=>{
                return store.myself.data;
            })
            let flag=true
            let status=yield select((store)=>{
                return store.myself.status
            })
            let newData=data.map((val,ind)=>{
                if(val.id==payload){
                    val.status=!val.status;
                    val.shops.forEach((v,k)=>{
                        v.status=val.status
                        
                    })
                    // if(!val.status){
                    //     flag=false;
                    // }
                }
                if(!val.status){
                    flag=false;
                }
                return val
            })
            yield put({
                type:'save',
                payload:{
                    data:newData
                }
            })
            yield put({
                type:'classify',
                payload:{
                    status:flag
                }
            })
            yield put({
                type:'Countprice'
            })
      },
      *Classifycheck({payload},{call , put , select}){
            let status=yield select((store)=>{
                return store.myself.status
            })
            let data=yield select((store)=>{
                return store.myself.data;
            })
            let newData=data.map((val,ind)=>{
                val.status=!status;
                val.shops.forEach((v,k)=>{
                    v.status=!status;
                })
                return val
            })
            yield put({
                type:'save',
                payload:{
                    data:newData
                }
            })
            yield put({
                type:'allcheck',
                payload:{
                    status:!status
                }
            })
            yield put({
                type:'Countprice'
            })
      },
      *Countprice( _ ,{ call , put , select }){
            let data=yield select((store)=>{
                return store.myself.data;
            })
            let num=0;
            data.map((val,ind)=>{
                val.shops.forEach((v,k)=>{
                    if(v.status){
                        num+=v.price*1;
                    }
                })
            })
            yield put({
                type:'price',
                payload:{
                    num:num
                }
            })
      }
    },

    reducers: {
      save(state, action) {
        return { ...state, ...action.payload };
      },
      classify(state,action){
        return { ...state, ...action.payload };
      },
      allcheck(state,action){
        return { ...state, ...action.payload };
      },
      price(state,action){
        return { ...state, ...action.payload };
      }
    },
  
  };
  