import request from '../utils/request';
export function query() {
  return request('/api/users');
}
export function requesQuery() {
  return {
      "listData":[
          {
            "id":"1",
            "status":false,
            "tit":"服装",
            "shops":[
                {
                    "id":"1_1",
                    "status":false,
                    "tit":"上衣",
                    "price":"10"
                },{
                    "id":"1_2",
                    "status":false,
                    "tit":"裤子",
                    "price":"20"
                }
            ]
          },{
            "id":"2",
            "status":false,
            "tit":"鞋子",
            "shops":[
                {
                    "id":"2_1",
                    "status":false,
                    "tit":"运动鞋",
                    "price":"100"

                },{
                    "id":"2_2",
                    "status":false,
                    "tit":"皮鞋",
                    "price":"200"
                }
            ]
          }
      ]
  };
}