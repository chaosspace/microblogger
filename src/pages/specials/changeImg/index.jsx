import React from "react";

import changeImgCss from "./changeImg.module.css";
import UploadC from "./Upload";

export default function ChangeImg(props) {

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
        <UploadC columnId={props.columnId} setState={props.setState} />
        <div>
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
