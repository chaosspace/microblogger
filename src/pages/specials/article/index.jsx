import React from 'react'

import specialsCss from "../specials.module.css";


export default function Articles(props) {
  //点击文章时触发函数
  function topassage (){
    window.location = `/home/passages?id=${props.data.id}`
  }
  return (
    <div onClick={topassage} className={specialsCss.passages}>
      <div className={specialsCss.passagesTitle}>{props.data.articleTitle}</div>
      <div dangerouslySetInnerHTML = {{ __html: props.data.content}} className={specialsCss.passagesContent}>
      </div>
    </div>
  )
}


