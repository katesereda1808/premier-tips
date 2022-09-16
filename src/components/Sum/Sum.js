import React, { useEffect, useState } from 'react';
import close_btn from '../assets/images/close_btn.svg';
import s from './Sum.module.css';

const Sum =({onChangeSum, value})=> {
    const [sum, setSum] = useState(0);
    const handleChange=(e)=>{
        // setSum(e.target.value);
        // onChangeSum(sum);
        // ошибка, переданное значение опаздывало на 1 символ, тк useState асинхронный
        // чтобы избежать задержки, вместо state используется e.target.value
        onChangeSum(e.target.value);
        const pos = e.target.value.length - 2;
        e.target.setSelectionRange(0, pos);
        console.log(e.target.value)
    }
    // const formatted = value.replace(/\D/g,'')+' ₽';
    const formatted = value;
    const clearInput=()=>{
        onChangeSum('');
    }
    
    const sums = [100, 250, 500, 1000, 2500];
    return(
        <div>
            <div className={s.input_box}>
                <input
                placeholder='0'
                // type="number"
                // type = number не подходит, тк нужно будет добавлять знак валюты в input
                value={formatted}
                className={s.input}  
                onChange={handleChange}
                // onChange={(e)=>onChangeSum(e.target.value)}
                // onClick={()=>onChangeSum(sum)}
                ></input>
                
                <img src={close_btn} className={s.close_btn} onClick={clearInput}/>
            </div>
            
            <div className={s.sums}>
                {sums.map((sum, i)=>{
                    return(
                        <button key={i} value={sum} className={s.price_btn} onClick={handleChange}>
                            {sum} ₽
                        </button>
                    )
                })}
            </div>
        </div>
    )
}
export {Sum};