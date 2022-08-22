import React, { Component } from 'react'

import { Link } from 'react-router-dom'
import loginCss from './login.module.css'

export default class Login extends Component {
  //初始化状态
  state = ({
    name:'',
    password:''
  })
  login = () => {
    const { phoneNumber, password } = this.state
      
  }
  toRegister = () => {
    console.log(this);
    // this.props.history.push('/register')
  }
  //边框样式切换
  iptOnFocus = (e) => {
    e.target.style.borderColor = 'black'
  }
  iptOnBlur = (e) => {
    console.log(e.target);
    e.target.style.borderColor = 'rgb(91, 130, 248)'
  }
  render() {
    return (
      <div className={loginCss.container}>
        <div className={loginCss.iptWraper}>
          <div className={loginCss.iptInfo}>昵称</div>
          <div><input onFocus={this.iptOnFocus} onBlur={this.iptOnBlur} onChange={(e)=>{this.setState({name:e.target.value})}} className={loginCss.ipt} type="text"/></div>
        </div>
        <div className={loginCss.iptWraper}>
          <div className={loginCss.iptInfo}>密码</div>
          <div><input onFocus={this.iptOnFocus} onBlur={this.iptOnBlur} onChange={(e)=>{this.setState({password:e.target.value})}} className={loginCss.ipt} type="password"/></div>
        </div>
        <div className={loginCss.loginBtn}>
          <div>登录</div>
        </div>
        <div className={loginCss.toRegister}>
          您还没有账户?
          <Link to='/register' style={{ textDecoration:'none'}}>
            <span onClick={this.toRegister}>注册</span>

          </Link>
        </div>
      </div>
    )
  }
}
