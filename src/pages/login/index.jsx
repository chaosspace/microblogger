import React, { Component } from 'react'

import loginCss from './login.module.css'

export default class Login extends Component {
  //初始化状态
  state = ({
    phoneNumber:'',
    password:''
  })
  login = () => {
    const { phoneNumber, password } = this.state

  }
  toRegister = () => {
    this.props.history.push('register')
  }
  render() {
    return (
      <div className={loginCss.container}>
        <div className={loginCss.iptWraper}>
          <div className={loginCss.iptInfo}>手机</div>
          <div><input onChange={(e)=>{this.setState({phoneNumber:e.target.value})}} className={loginCss.ipt} type="text"/></div>
        </div>
        <div className={loginCss.iptWraper}>
          <div className={loginCss.iptInfo}>密码</div>
          <div><input onChange={(e)=>{this.setState({password:e.target.value})}} className={loginCss.ipt} type="password"/></div>
        </div>
        <div className={loginCss.loginBtn}>
          <div>登录</div>
        </div>
        <div className={loginCss.toRegister}>
          您还没有账户?
          <span onClick={this.toRegister}>注册</span>
        </div>
      </div>
    )
  }
}
