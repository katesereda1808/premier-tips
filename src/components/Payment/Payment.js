import React, { useEffect, useState } from 'react';
import spb from '../assets/images/spb.svg';
import s from './Payment.module.css';


const Payment =()=> {
    return(
        <div className={s.payment}>
            <button className={`${s.button} ${s.btn_blue}`}>
                Оплатить <img src={spb} className={s.img_in_btn}/> сбп
            </button>
            <button  className={`${s.button} ${s.btn_gray}`}>
                Оплатить картой
            </button>
            <div className={s.comission}>
                <input type="checkbox" id="add_compensation"></input>
                <label for="add_compensation">
                    Я хочу компенсировать комиссию сервиса
                    транзакций 25 руб., чтобы покрыть издержки за перевод средств сотруднику 
                </label>
                
            </div>
            <div className={s.warning}>
                Нажимая на кнопку «Оплатить», вы соглашаетесь с условиями <a href=''>оферты, политикой безопасности платежей, согласием на обработку персональных данных, противодействием терроризму</a>.
            </div>
        </div>
    )
}
export {Payment};