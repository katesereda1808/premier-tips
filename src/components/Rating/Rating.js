import React, { useState } from "react";
import star_empty from "../assets/images/icons/star_empty.svg";
import star_fill from "../assets/images/icons/star_fill.svg";
import s from "./Rating.module.css";

const Rating = () => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  const setStars=(num)=>{
    if (num === rating){
      setRating(null)
    } else {
      setRating(num)
    }
  }
  return (
    <>
      <div className={s.stars}>
        {[...Array(5)].map((star, i)=>{
          const starNumber = i+1;
          return(
            <label key={i+1}>
              <input type="radio" name="rating" className={s.star_radio} value={starNumber}
              // onClick={()=>setRating(starNumber)}
              // нужно было расширить функцию, чтобы сделать возможным аннулирование рейтинга при повторном клике на звездочку
              onClick={()=>setStars(starNumber)}/>
              {/* <img src={`${starNumber <= rating || hover ? star_fill : star_empty}`}  
              сначала был такой порядок, сначала должен идти hover, потом rating
              + синтаксическая ошибка, выражение hover || rating не было заключено в круглые скобки
              */}
              <img src={`${starNumber <= (hover || rating) ? star_fill : star_empty}`} className={s.star} onMouseEnter={()=>setHover(starNumber)} onMouseLeave={()=>setHover(null)}/>
            </label>

          )
        })}
      </div>
      {
        rating && 
        <div className={s.comment_container}>
        <div className={s.comment_label}>
            Расскажите подробнее...
        </div>
        <textarea className={s.comment_text} placeholder="Ваш комментарий">
        </textarea>
          </div>
      }
    </>
  );
};
export { Rating };
