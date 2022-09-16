import s from './App.module.css';
import React, { useEffect, useState } from 'react';
import { Employee } from './components/Employee/Employee';
import { Sum } from './components/Sum/Sum';
import { Rating } from './components/Rating/Rating';
import { Payment } from './components/Payment/Payment';

function App() {
  const [sum, setSum] = useState('');
  const handleSum=(sumValue)=>{
    // setSum(sumValue.replace(/\D/g,'')+' $');
    // сначала символ валюты добавлялся здесь, но потом стало понятно, что лучше его добавлять в компоненте Sum
    setSum(sumValue);
  }
  return (
    <div className={s.container} pointerEvents="none">
      <Employee/>
      <Sum onChangeSum={handleSum} value={sum}/>
      <Rating/>
      <Payment sum={sum}/>
    </div>
  );
}

export default App;
