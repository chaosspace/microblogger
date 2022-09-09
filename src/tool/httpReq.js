import axios from 'axios'
// 给请求地址前加一个"/api"
const instance = axios.create({
  baseURL: '/weiboke',
});
// 添加返回拦截器，直接获取返回内容的data
instance.interceptors.response.use((res) => {
    return res.data
})
// 封装axios方法，并导出httpReq为新的请求工具
export const httpReq = (method, url, data) => {
  return new Promise((resolve, reject) => {
    instance({
      method: method,
      url: url,
      headers:{
        Authorization:'Bearer '+sessionStorage.getItem('token') || null
      },
      body:null||data
    }).then(
      (data) => {
        resolve(data)
      },
      (err) => {
        reject(err)
      }
    )
  })
}