import React, { Component } from 'react'

import registerCss from './register.module.css'

export default class Register extends Component {
  //初始化状态
  state = ({
    name:'',
    password:'',
    ensurePassword:''
  })
  //注册函数
  register = () => {

  }

  render() {
    return (
      <div className={registerCss.container}>
        <div className={registerCss.header}>
          注册
        </div>
        <div className={registerCss.iptWraper}>
          <div className={registerCss.iptInfo}>昵称</div>
          <div><input onChange={(e)=>{this.setState({name:e.target.value})}} className={registerCss.ipt} type="text" /></div>
        </div>
        <div className={registerCss.iptWraper}>
          <div className={registerCss.iptInfo}>密码</div>
          <div><input onChange={(e)=>{this.setState({password:e.target.value})}} className={registerCss.ipt} type="password" /></div>
        </div>
        <div className={registerCss.iptWraper}>
          <div className={registerCss.iptInfo}>再次输入密码</div>
          <div><input onChange={(e)=>{this.setState({ensurePassword:e.target.value})}} className={registerCss.ipt} type="password" /></div>
        </div>
        <div onClick={this.register} className={registerCss.registerBtn}>
          <div>注册</div>
        </div>
      </div>
    )
  }
}
