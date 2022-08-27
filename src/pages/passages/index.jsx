import React, { Component } from "react";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";

import passagesCss from "./passages.module.css";

export default function Passages() {
  
  const [ searchParams ] = useSearchParams()
  // console.log(searchParams.get('id'));
  const [state, setstate] = useState({id:searchParams.get('id')})
  
  return (
    <div className={passagesCss.container}>
      <div className={passagesCss.header}>
        <div>关注</div>
        <div>推荐</div>
      </div>
      <div className={passagesCss.specialsTitle}>专栏标题</div>
      <div className={passagesCss.passagesWraper}>
        <div className={passagesCss.passagesTitle}>《拒绝摆烂人生！》</div>
        <span className={passagesCss.authorInfo}>
          <span className={passagesCss.avatar}></span>
          <span className={passagesCss.name}>ply</span>
          <span className={passagesCss.creatingTime}>07-14</span>
        </span>
        <div className={passagesCss.passagesContent}>
          首先学生自己要明白，上大学的意义，端正学习态度。其次，这个时候辅导员的重要性就更加明显了。
          进入大学，肯定会鼓励学生积极参加社团活动丰富大学生活，但是也要告诉学生不要被五光十色的大学生活迷乱了眼。
          要摆正思想，学习依旧是大学生最重要且紧要的任务。
        </div>
      </div>
    </div>
  );
}
