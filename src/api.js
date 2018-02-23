import axios from 'axios'
import qs from 'qs';

const instance = axios.create({
  baseURL:"/api",
  timeout:8000,
  headers: {"content-type": "application/x-www-form-urlencoded"}
});

instance.interceptors.response.use(function(response){
 //对响应数据做些事
 //console.log(response) ;
 return response.data;
},function(error){
 //请求错误时做些事
 return Promise.reject(erro);
});

const post = (url,param) => instance.post(url,qs.stringify(param));
const get = (url,param) => instance.post(url+"?"+qs.stringify(param));

export default {
	getTest:(param)=>post("/user/browsing/UserBrowsingMsgOpt.action",param),
	getImg:(param)=>post("/php/goods/get_img.php",param),
	goodsInfo:(param)=>post("/user/browsing/UserBrowsingGoodsOpt.action",param),
}