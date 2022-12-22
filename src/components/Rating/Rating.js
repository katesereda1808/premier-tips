import { useState } from 'react';
import star_empty from '../../assets/icons/star_empty.svg';
import star_fill from '../../assets/icons/star_fill.svg';
import styles from './Rating.module.css';
import { stars } from '../../constants/index';

function Rating() {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  const setStars = (num) => {
    if (num === rating) {
      setRating(null);
    } else {
      setRating(num);
    }
  };
  return (
    <div>
      <div className={styles.stars}>
        {stars.map((star, i) => {
          const starNumber = i + 1;
          return (
            <label key={star}>
              <input
                type="radio"
                name="rating"
                className={styles.star_radio}
                value={starNumber}
                onClick={() => setStars(starNumber)}
              />
              {/* <img src={`${starNumber <= rating || hover ? star_fill : star_empty}`}  
              сначала был такой порядок, сначала должен идти hover, потом rating
              + синтаксическая ошибка, выражение hover || rating не было заключено в круглые скобки
              */}
              <img
                src={`${starNumber <= (hover || rating) ? star_fill : star_empty}`}
                className={styles.star}
                onMouseEnter={() => setHover(starNumber)}
                onMouseLeave={() => setHover(null)}
                alt=""
              />
            </label>
          );
        })}
      </div>
      {rating && (
        <div className={styles.comment_container}>
          <div className={styles.comment_label}>Расскажите подробнее...</div>
          <textarea className={styles.comment_text} placeholder="Ваш комментарий" />
        </div>
      )}
    </div>
  );
}
export { Rating };
