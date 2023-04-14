import React, { Component } from 'react'

import registerCss from './register.module.css'
import { httpReq } from '../../tool/httpReq'


export default class Register extends Component {
  //初始化状态
  state = ({
    name:'',
    password:'',
    ensurePassword:''
  })
  //注册函数
  register = () => {
    const {name, password} = this.state 
    if(//判断输入栏是否为空
      this.state.name.length === 0 ||
      this.state.password.length === 0 ||
      this.state.ensurePassword.length === 0
    ){
      this.tip('输入栏不能为空')
      return 
    }
    if(this.isLegal()){//信息合法处理
      httpReq('post',`/user/register?username=${name}&password=${password}`)
      .then(
        res => {
          if(res.status_code === 0){//注册成功
            this.tip(res.status_msg, 'success')
            setTimeout(()=>{
              window.location = '/login'
            },1500)
          }else{//注册失败
            this.tip(res.status_msg)
          }
        },
        err => console.log(err)
      )
    }
  }
  //判断注册信息是否合法
  isLegal = () =>{
    if(
      this.state.name.search(/\s/) === -1 &&
      this.state.password.search(/\s/) === -1 &&
      this.state.ensurePassword.search(/\s/) === -1 &&
      this.state.password === this.state.ensurePassword
    ){//合法信息
      return true
    }
    else{//非法信息
      return false
    }
  }
  //提示函数
  tip(tips,flag){
    let tipNode = document.createElement('div')
    tipNode.innerText = tips
    if(flag === 'success'){
      tipNode.style.color = 'greenyellow'
    }
    document.body.appendChild(tipNode)
    tipNode.style.animation = 'tips 1.5s linear'
    tipNode.classList.add('tip')
    //等待时间后 移除提示
    setTimeout(()=>{
      document.body.removeChild(tipNode)
    },1500)
  }
  //边框样式切换
  iptOnFocus = (e) => {
    e.target.style.borderColor = 'black'
  }
  iptOnBlur = (e) => {
    e.target.style.borderColor = 'rgb(91, 130, 248)'
  }

  render() {
    return (
      <div className={registerCss.container}>
        <div className={registerCss.header}>
          注册
        </div>
        <div className={registerCss.iptWraper}>
          <div className={registerCss.iptInfo}>昵称</div>
          <div><input onFocus={this.iptOnFocus} onBlur={this.iptOnBlur} onChange={(e)=>{this.setState({name:e.target.value})}} className={registerCss.ipt} type="text" /></div>
        </div>
        <div className={registerCss.iptWraper}>
          <div className={registerCss.iptInfo}>密码</div>
          <div><input onFocus={this.iptOnFocus} onBlur={this.iptOnBlur} onChange={(e)=>{this.setState({password:e.target.value})}} className={registerCss.ipt} type="password" /></div>
        </div>
        <div className={registerCss.iptWraper}>
          <div className={registerCss.iptInfo}>再次输入密码</div>
          <div><input onFocus={this.iptOnFocus} onBlur={this.iptOnBlur} onChange={(e)=>{this.setState({ensurePassword:e.target.value})}} className={registerCss.ipt} type="password" /></div>
        </div>
        <div onClick={this.register} className={registerCss.registerBtn}>
          <div>注册</div>
        </div>
      </div>
    )
  }
}
