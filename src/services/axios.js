import axios from 'axios'

export function request(config) {

  //创建axios实例
  const instance = axios.create({
    baseURL: 'http://localhost:3008',
    timeout: 10000
  })

  // axios的拦截器
  instance.interceptors.request.use(res => {//拦截请求
    // console.log("拦截请求成功",res);
    return res
  },err => {
    console.log("拦截请求失败",err);
  })


  instance.interceptors.response.use(res => {//拦截响应
    // console.log("拦截响应成功",res.data);
    return res.data
  }, err => {
    // console.log("拦截响应失败",err);
  })

  //发送真正网络请求 instance本身返回的就是promise
  return instance(config)

}