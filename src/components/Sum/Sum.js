import React, { useEffect, useState, useRef } from 'react';
import close_btn from '../assets/images/icons/close_btn.svg';
import s from './Sum.module.css';

const Sum = ({ onChangeSum, value }) => {
    // const [sum, setSum] = useState(0);
    const formatted = value.replace(/\D/g, '') + ' ₽';
    const sums = [100, 250, 500, 1000, 2500];
    const inputEl = useRef(null);
    const [selection, setSelection] = useState(0, 0);

    const clearInput = () => {
        onChangeSum('');
    }
    useEffect(() => {
        if (!value) {
            inputEl.current.setSelectionRange(0, 0);
            //чтобы при открытии страницы курсор был в начале инпута
            // без этого условия инпут ставится после символа валюты и при наборе следующего символа съезжает на элемент назад
        } else {
            const { start, end } = selection;
            inputEl.current.focus();
            inputEl.current.setSelectionRange(start, end);
            // inputEl.current.setSelectionRange(0, 0);
        }

    }, [selection])

    const handleChange=(e)=>{
        // setSum(e.target.value);
        // onChangeSum(sum);
        // ошибка, переданное значение опаздывало на 1 символ, тк useState асинхронный
        // чтобы избежать задержки, вместо state используется e.target.value
        onChangeSum(e.target.value);
        // const last = e.target.value.length - 2;
        // e.target.setSelectionRange(0, last);
        // попыталась вызвать функцию setSelectionRange, но ее необходимо было завернуть в useEffect
    }
    const handleSelection = () => {
        setSelection({ start: value.indexOf(' '), end: value.indexOf(' ') });
        // setSelection(0, inputLength);
        // сначала я думала, что мне нужно записать кликабельную область инпута и исключить из нее символ валюты
        // но при таком подходе вся область выделялась и при вводе значение переписывалось полностью
        // до меня дошло, что если мне нужно управлять позицией курсора, вместо диапазона всего
        // текста нужно ввести индекс курсора (а курсор должен стоять перед пробелом и символом валюты)
    }
    return(
        <div>
            <div className={s.input_box}>
                <input
                placeholder='0'
                    ref={inputEl}
                // type="number"
                // type = number не подходит, тк нужно будет добавлять знак валюты в input
                value={formatted}
                className={s.input}  
                onChange={handleChange}
                    onSelect={handleSelection}
                // onChange={(e)=>onChangeSum(e.target.value)}
                // onClick={()=>onChangeSum(sum)}
                ></input>
                <button>
                    <img src={close_btn} className={s.close_btn} onClick={clearInput}/>
                </button>
            </div>
            
            <div className={s.sums}>
                {sums.map((sum, i)=>{
                    return(
                        <button key={i}
                            // value={sum}
                            // сначала в value передавалось только число, без знака валюты
                            // Из-за этого невозможно было найти индекс пробела в value
                            // При введении значения в инпут с помощью кнопки курсор съезжал вконец и невозможно было изменить число
                            value={sum + ' ₽'}
                            className={`${s.price_btn} ${sum + ' ₽' === value ? s.price_chosen : ''}`} onClick={handleChange} >
                            {sum} ₽
                        </button>
                    )
                })}
            </div>
        </div>
    )
}
export {Sum};