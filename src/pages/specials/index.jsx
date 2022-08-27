import React, { Component } from 'react'

import specialsCss from './specials.module.css'
import { httpReq } from '../../tool/httpReq'

export default class Specials extends Component {
  //状态初始化
  state ={
    articleList:'',
            userInfo:'',
            header:''
  }
  componentDidMount = () => {
    httpReq('get',`/publish/column?columnId=1&userId=7`)
    .then(
      res => {
        console.log(res)
        this.setState(
          {
            articleList:res.data.articleList,
            userInfo:res.data.user,
            header:res.data.column
          }
        )
      },
      err => console.log(err)
    )
  }
  render() {
    return (
      <div className={specialsCss.container}>
        <div className={specialsCss.header}>
          <div>关注</div>
          <div>推荐</div>
        </div>
        <div className={specialsCss.specialsInfo}>
          <div className={specialsCss.img}></div>
          <div>
            <div className={specialsCss.title}>大学生就该这样</div>
            <div>
              <span className={specialsCss.brief}>
              简介: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar sic tempor. Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus pronin sapien nunc accuan eget.
              </span>
            </div>
            <div className={specialsCss.personalInfo}>
              <div>
                <div className={specialsCss.avatar}></div>
                <div className={specialsCss.name}>ply</div>
              </div>
              <div className={specialsCss.operation}>
                已关注
              </div>
            </div>
          </div>
        </div>
        <div className={specialsCss.category}>
          目录:
          <div className={specialsCss.passages}>
            <div className={specialsCss.passagesTitle}>《拒绝摆烂人生》</div>
            <div className={specialsCss.passagesContent}>
            首先学生自己要明白，上大学的意义，端正学习态度。其次，这个时候辅导员的重要性就更加明显了。进入大学，肯定会鼓励学生积极参加社团活动丰富大学生活，但是也要告诉学生不要被五光十色的大学生活迷乱了眼。要摆正思想，学习依旧是大学生最重要且紧.....
            </div>
          </div>
          <div className={specialsCss.passages}>

          </div>
          <div className={specialsCss.passages}>

          </div>
        </div>
      </div>
    )
  }
}
