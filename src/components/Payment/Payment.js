import React, { useState } from 'react';
import spb from '../../assets/images/icons/spb.svg';
import unchecked from '../../assets/images/icons/unchecked.svg';
import checked from '../../assets/images/icons/checked.svg';
import styles from './Payment.module.css';
import { commissionPercentsge } from '../../constants';

function Payment({ sum }) {
  const [isChecked, setChecked] = useState(false);
  // const checkboxChange =()=>{
  // checked?
  // setChecked(false):
  // setChecked(true)
  // более лаконичный способ
  //     setChecked(!isChecked);
  // }
  // решила прописать функцию в разметке, тк она небольшая

  const comissionSum = Math.ceil(sum.replace(/\D/g, '') * commissionPercentsge);

  return (
    <div className={styles.payment}>
      <button className={`${styles.button} ${styles.btn_blue}`}>
        Оплатить <img src={spb} className={styles.img_in_btn} alt="" /> сбп
      </button>
      <button className={`${styles.button} ${styles.btn_gray}`}>Оплатить картой</button>
      <div className={styles.comission}>
        <label>
          <input
            type="checkbox"
            name="compensation"
            checked={isChecked}
            onChange={() => setChecked(!isChecked)}
            className={styles.default_checkbox}
          />
          <img className={styles.checkbox} src={`${isChecked ? checked : unchecked}`} alt="" />
          <p className={styles.comission_text}>
            Я хочу компенсировать комиссию сервиса транзакций {comissionSum} руб., чтобы покрыть
            издержки за перевод средств сотруднику
          </p>
        </label>
      </div>
      <div className={styles.warning}>
        Нажимая на кнопку «Оплатить», вы соглашаетесь с условиями{' '}
        <a href="#/">
          оферты, политикой безопасности платежей, согласием на обработку персональных данных,
          противодействием терроризму
        </a>
        .
      </div>
    </div>
  );
}
export { Payment };
