import React from "react";

import { useEffect } from "react";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";

import specialsCss from "./specials.module.css";
import { httpReq } from "../../tool/httpReq";
import Article from "./article";
// import ChangeImg from "./changeImg";

export default function Specials() {
  //状态初始化
  const [state, setState] = useState({
    articleList: "",
    authorInfo: "",
    header: "",
    isLoading: true,
    isUpload: false,
  });
  //获取searchParams
  const [searchParams] = useSearchParams();
  //在挂载时获取数据
  useEffect(() => {
    httpReq("get", `/publish/column?columnId=1&userId=1`).then(
      (res) => {
        //将数据存在状态中
        setState({
          userId: searchParams.get("id"),
          columnId: 1,
          articleList: res.data.articleList,
          authorInfo: res.data.user,
          header: res.data.column,
          isLoading: false,
          isUpload: false,
        });
      },
      (err) => console.log(err)
    );
  }, []);
  //提示函数
  function tip(tips, flag) {
    let tipNode = document.createElement("div");
    tipNode.innerText = tips;
    if (flag === "success") {
      tipNode.style.color = "greenyellow";
    }
    document.body.appendChild(tipNode);
    tipNode.style.animation = "tips 1.5s linear";
    tipNode.classList.add("tip");
    //等待时间后 移除提示
    setTimeout(() => {
      document.body.removeChild(tipNode);
    }, 1500);
  }
  //关注函数
  function follow() {
    //发送关注请求
    const { isfollow, id: authorId } = state.authorInfo;
    let followFlag = isfollow ? 2 : 1;
    httpReq(
      "post",
      `/follow?userId=${state.userId}&authorId=${authorId}&type=${followFlag}`
    ).then(
      (res) => {
        tip(res.status_msg, "success");
        //在状态中变更数据
        const result = state.authorInfo;
        result.isfollow = !result.isfollow;
        setState({
          articleList: state.articleList,
          header: state.header,
          authorInfo: result,
          userId: state.userId,
          columnId: state.columnId,
          isUpload: false,
        });
      },
      (err) => console.log(err)
    );
  }

  if (!state.isLoading) {
    const { title, introduction, coverUrl } = state.header;
    const { headUrl, username, isfollow } = state.authorInfo;
    const { articleList } = state;
    let articles = [...articleList];
    return (
      <div className={specialsCss.container}>
        <div className={specialsCss.header}>
          <div>关注</div>
          <div>推荐</div>
        </div>
        <div className={specialsCss.specialsInfo}>
          <div
            onClick={function () {
              setState({
                articleList: state.articleList,
                header: state.header,
                authorInfo: state.authorInfo,
                userId: state.userId,
                columnId: state.columnId,
                isUpload: true
              });
            }}
            className={specialsCss.img}
          >
            <img
              title="更改图片"
              width={"220px"}
              height={"222px"}
              src={coverUrl}
              alt="nosource"
            />
          </div>
          <div>
            <div className={specialsCss.title}>{title}</div>
            <div>
              <span className={specialsCss.brief}>简介: {introduction}</span>
            </div>
            <div className={specialsCss.personalInfo}>
              <div>
                <div className={specialsCss.avatar}>
                  <img
                    style={{
                      width: "35px",
                      height: "35px",
                      borderRadius: "50%",
                    }}
                    src={headUrl}
                    alt="nosource"
                  />
                </div>
                <div className={specialsCss.name}>{username}</div>
              </div>
              <div onClick={follow} className={specialsCss.operation}>
                {isfollow ? "已关注" : "关注"}
              </div>
            </div>
          </div>
        </div>
        <div className={specialsCss.category}>
          目录 :
          {articles.map((article) => {
            return (
              <Article
                key={article.id}
                data={article}
                from={state.columnId}
                userId={state.userId}
              />
            );
          })}
        </div>
        {/* {state.isUpload ? <ChangeImg imgUrl={state.header.coverUrl} setState={setState} /> : ""} */}

      </div>
    );
  }
}
