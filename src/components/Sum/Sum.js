import React, { useEffect, useState } from 'react';
import close_btn from '../assets/images/close_btn.svg';
import s from './Sum.module.css';


const Sum =()=> {
    return(
        <div>
            <div className={s.input_box}>
                <input
                // type="number"
                // type = number не подходит, тк нужно будет добавлять знак валюты в input
                className={s.input}></input>
                <img src={close_btn} className={s.close_btn}/>
            </div>
            
            
            <div className={s.sums}>
                <div className={s.price_btn}>
                    500 ₽
                </div>
                <div className={s.price_btn}>
                    500 ₽
                </div>
                <div className={s.price_btn}>
                    500 ₽
                </div>
                <div className={s.price_btn}>
                    500 ₽
                </div>
                <div className={s.price_btn}>
                    500 ₽
                </div>
                <div className={s.price_btn}>
                    500 ₽
                </div>
                <div className={s.price_btn}>
                    500 ₽
                </div>
                <div className={s.price_btn}>
                    500 ₽
                </div>

            </div>
        </div>
    )
}
export {Sum};