import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";

import { httpReq } from "../../tool/httpReq";
import passagesCss from "./passages.module.css";

export default function Passages() {
  //状态初始化
  const [state, setstate] = useState({isloading:true});
  //获取search参数
  const [searchParams] = useSearchParams();
  const passageId = searchParams.get("id");
  //组件挂载时请求数据
  useEffect(() => {
    //发送请求获取文章数据
    httpReq("get", `/publish/article?articleId=${passageId}`).then(
      (res) => {
        //将结果存在状态中，并且将是否加载中改为否
        setstate({data:res.data, isloading:false})
      },
      (err) => console.log(err)
    );
  },[]);
  if(!state.isloading){
    const { columnTitle, content, articleTitle, createDate } = state.data.article
    const { username, headUrl } = state.data.user
    return (
      <div className={passagesCss.container}>
        <div className={passagesCss.header}>
          <div>关注</div>
          <div>推荐</div>
        </div>
        <div className={passagesCss.specialsTitle}>{columnTitle}</div>
        <div className={passagesCss.passagesWraper}>
          <div className={passagesCss.passagesTitle}>{articleTitle}</div>
          <span className={passagesCss.authorInfo}>
            <span className={passagesCss.avatar}>
            <img style={{width:'53px', height:'53px',borderRadius:'50%'}} src={headUrl} alt="nosource" />
            </span>
            <span className={passagesCss.name}>{username}</span>
            <span className={passagesCss.creatingTime}>{createDate}</span>
          </span>
          <div dangerouslySetInnerHTML = {{ __html: content}} className={passagesCss.passagesContent}></div>
        </div>
      </div>
    );
  }
}