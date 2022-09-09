import React from "react";

import changeImgCss from "./changeImg.module.css";
import { httpReq } from "../../../tool/httpReq";
import { useState } from "react";
import UploadC from "./Upload";


export default function ChangeImg(props) {
  //状态初始化
  const [state, setState] = useState({
    img: "",
  });



  //上传图片
  function upload() {
    console.log(1);
    const formData = new FormData();
    formData.append("file", state.img);
    httpReq("post", `/static/Image/cover?columnId=1`, formData).then(
      (res) => {
        console.log(res);
      },
      (err) => console.log(err)
    );
  }

  return (
    <div className={changeImgCss.changeImg}>
      <div className={changeImgCss.preImg}>
        <div>原图片:</div>
        <img
          width={"110px"}
          height={"111px"}
          src={props.imgUrl}
          alt="nosource"
        />
        <div></div>
      </div>

      <div className={changeImgCss.operation}>
        <UploadC />
        <div>
          <div onClick={upload}>上传</div>
          <div
            onClick={function () {
              props.setState((pre) => {
                return { ...pre, isUpload: false };
              });
            }}
          >
            取消
          </div>
        </div>
      </div>
    </div>
  );
}
