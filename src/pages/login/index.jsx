import React, { Component } from "react";

import { Link } from "react-router-dom";
// import { httpReq } from "../../tool/httpReq";
import { httpReq } from "../../tool/httpReq";
import loginCss from "./login.module.css";

export default class Login extends Component {
  //初始化状态
  state = {
    name: "",
    password: "",
  };
  login = () => {
    if (this.state.name.length === 0 || this.state.password.length === 0) {
      this.tip('信息不能为空')
      return
    }
    const { name, password } = this.state;
    if (this.isLegal()) {
      httpReq('post',`/user/login?username=${name}&password=${password}`)
      .then(
        res => {
          if(res.status_code === 0){//登录成功
            this.tip(res.status_msg, 'success')
            setTimeout(()=>{
              window.location = `/home/specials?id=${res.data}`
            },1500)
          }else{//登录失败
            this.tip(res.status_msg)
          }
        },
        err => console.log(err)
      )
    }else{
      this.tip('信息非法!')
    }
  };
  //判断注册信息是否合法
  isLegal = () => {//合法信息
    if (
      this.state.name.search(/\s/) === -1 &&
      this.state.password.search(/\s/) === -1
    ) {
      return true;
    }else {//非法信息
      return false;
    }
  };
  //提示函数
  tip(tips, flag) {
    let tipNode = document.createElement("div");
    tipNode.innerText = tips;
    document.body.appendChild(tipNode);
    tipNode.style.animation = "tips 1.5s linear";
    if(flag === 'success'){
      tipNode.style.color = 'greenyellow'
    }
    tipNode.classList.add("tip");
    //等待时间后 移除提示
    setTimeout(() => {
      document.body.removeChild(tipNode);
    }, 1500);
  }
  //边框样式切换
  iptOnFocus = (e) => {
    e.target.style.borderColor = "black";
  };
  iptOnBlur = (e) => {
    e.target.style.borderColor = "rgb(91, 130, 248)";
  };
  render() {
    return (
      <div className={loginCss.container}>
        <div className={loginCss.iptWraper}>
          <div className={loginCss.iptInfo}>昵称</div>
          <div>
            <input
              onFocus={this.iptOnFocus}
              onBlur={this.iptOnBlur}
              onChange={(e) => {
                this.setState({ name: e.target.value });
              }}
              className={loginCss.ipt}
              type="text"
            />
          </div>
        </div>
        <div className={loginCss.iptWraper}>
          <div className={loginCss.iptInfo}>密码</div>
          <div>
            <input
              onFocus={this.iptOnFocus}
              onBlur={this.iptOnBlur}
              onChange={(e) => {
                this.setState({ password: e.target.value });
              }}
              className={loginCss.ipt}
              type="password"
            />
          </div>
        </div>
        <div className={loginCss.loginBtn}>
          <div onClick={this.login}>登录</div>
        </div>
        <div className={loginCss.toRegister}>
          您还没有账户?
          <Link to="/register" style={{ textDecoration: "none" }}>
            <span onClick={this.toRegister}>注册</span>
          </Link>
        </div>
      </div>
    );
  }
}
