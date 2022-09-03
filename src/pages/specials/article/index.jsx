import React from "react";
import { NavLink } from "react-router-dom";
import specialsCss from "../specials.module.css";

export default function Articles(props) {

  return (
    <NavLink state={{userId:props.userId}} to={`/home/passages?id=${props.data.id}&from=${props.from}`}>
      <div className={specialsCss.passages}>
        <div className={specialsCss.passagesTitle}>
          {props.data.articleTitle}
        </div>
        <div
          dangerouslySetInnerHTML={{ __html: props.data.content }}
          className={specialsCss.passagesContent}
        ></div>
      </div>
    </NavLink>
  );
}