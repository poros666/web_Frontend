import axios from "axios";

//获取token，用来渲染用户信息
export function getToken() {
  return localStorage.getItem("token")
}

//设置token，登陆时调用
//rdc：暂时想法是我把jwt和account存下来，然后需要用户的其他信息的时候再用account去查询
//rdc: 修改，将userdata全部存下来了
export function setToken(token,account) {
  const usertoken = {
    token:token,
    expire: new Date().getTime() + 1000 * 60 * 30//30分钟有效期
  };
  localStorage.setItem("token", JSON.stringify(usertoken))
  getUserInfor(account)
}

//判断是否是登陆状态
export function isLogined() {
  const storage =JSON.parse( localStorage.getItem("token"));
  const time = new Date().getTime();
  let result = false;
  if (storage) {
      if (time < storage.expire) {
          result = true;
      } else {
          localStorage.removeItem("token");
          localStorage.removeItem("userData");
      }
  }
  return result;
}

//判断是否是管理员
export function  isLoginedAdmin() {
  const storage =JSON.parse( localStorage.getItem("token"));
  var account = JSON.parse(localStorage.userData).account
  let result = false;
  console.log("here",account)
  if(account !== "fwdarling"){
    console.log("checked")
    window.alert("并非管理员！")
    return false;
  }

  const time = new Date().getTime();
  if (storage) {
      if (time < storage.expire) {
          result = true;
      } else {
          localStorage.removeItem("token");
          localStorage.removeItem("userData");
      }
  }
  return result;
}

//退出登录
export function clearToken() {
  localStorage.removeItem("token")
  localStorage.removeItem("userData")
}


//获取用户的各种信息
export function getUserInfor(account){
  var token=JSON.parse( localStorage.getItem('token')).token
  axios.get('/Users/'+account,{headers: { "Authorization": 'Bearer ' +token }})
  .then(function (response) {
    console.log(response);
    var data=response.data
    data['account']=account
    localStorage.setItem("userData", JSON.stringify(data))
  })
  .catch(function (error) {
    console.log(error);
  });
}