import React, { useEffect, useState } from "react";
import star_empty from "../assets/images/star_empty.svg";
import star_fill from "../assets/images/star_fill.svg";
import s from "./Rating.module.css";

const Rating = () => {
    // написать состояние pressed
  return (

    <>
      <div className={s.stars}>
        <img src={star_fill} className={s.star} />
        <img src={star_fill} className={s.star} />
        <img src={star_fill} className={s.star} />
        <img src={star_fill} className={s.star} />
        <img src={star_empty} className={s.star} />
      </div>
      {/* условный рендеринг */}
      <div className={s.comment_container}>
        <div className={s.comment_label}>
            Расскажите подробнее...
        </div>
        <textarea className={s.comment_text} placeholder="Ваш комментарий">
        </textarea>
      </div>

    </>
  );
};
export { Rating };
