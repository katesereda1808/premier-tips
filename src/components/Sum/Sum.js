import { useRef } from 'react';
import close_btn from '../../assets/icons/close_btn.svg';
import styles from './Sum.module.css';
import { sums } from '../../constants/index';

function Sum({ handleSum, value }) {
  const sumMask = useRef(null);

  const clearInput = () => {
    handleSum('');
    sumMask.current.innerHTML = '';
  };
  const validateSum = (sum) => {
    const validatedSum = sum.replace(/\D/g, '');
    return validatedSum;
  };

  const changeSum = (e) => {
    handleSum(validateSum(e.target.value));
  };

  return (
    <div>
      <div className={styles.input_box}>
        <input value={value} className={styles.input} onChange={changeSum} />
        <div className={styles.sum_input__mask} ref={sumMask}>
          {value}
          <span className={styles.sum_input__currency}>₽</span>
        </div>
        <button onClick={clearInput}>
          <img src={close_btn} className={styles.close_btn} alt="" />
        </button>
      </div>
      <div className={styles.sums}>
        {sums.map((sums_item) => {
          return (
            <input
              type="button"
              key={sums_item}
              value={sums_item}
              className={`${styles.price_btn} ${sums_item === value ? styles.price_chosen : ''}`}
              onClick={changeSum}
            />
          );
        })}
      </div>
    </div>
  );
}
export { Sum };
