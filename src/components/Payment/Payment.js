import React, { useEffect, useState } from 'react';
import spb from '../assets/images/spb.svg';
import unchecked from '../assets/images/unchecked.svg';
import checked from '../assets/images/checked.svg';
import s from './Payment.module.css';


const Payment =({sum})=> {
    const [compensationSum, setCompensationSum] = useState(0);
    const [isChecked, setChecked] = useState(false);
    // const checkboxChange =()=>{
        // checked?
        // setChecked(false):
        // setChecked(true)
        // более лаконичный способ
    //     setChecked(!isChecked);
    // }
    // решила прописать функцию в разметке, тк она небольшая

    const comissionSum = sum.replace(/\D/g,'')*0.05;
    
    return(
        <div className={s.payment}>
            <button className={`${s.button} ${s.btn_blue}`}>
                Оплатить <img src={spb} className={s.img_in_btn}/> сбп
            </button>
            <button  className={`${s.button} ${s.btn_gray}`}>
                Оплатить картой
            </button>
            <div className={s.comission}>
                <label>
                    <input type="checkbox" name="compensation" checked={isChecked} onChange={()=>setChecked(!isChecked)} className={s.default_checkbox}/>
                    <img className={s.checkbox}  src={`${isChecked? checked: unchecked}`}/>
                    Я хочу компенсировать комиссию сервиса
                    транзакций {comissionSum} руб., чтобы покрыть издержки за перевод средств сотруднику 
                </label>
                
            </div>
            <div className={s.warning}>
                Нажимая на кнопку «Оплатить», вы соглашаетесь с условиями <a href=''>оферты, политикой безопасности платежей, согласием на обработку персональных данных, противодействием терроризму</a>.
            </div>
        </div>
    )
}
export {Payment};