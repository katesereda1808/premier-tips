import s from './App.module.css';
import React, { useEffect, useState } from 'react';
import { Employee } from './components/Employee/Employee';
import { Sum } from './components/Sum/Sum';
import { Rating } from './components/Rating/Rating';
import { Payment } from './components/Payment/Payment';

function App() {
  const [sum, setSum] = useState('');
  const handleSum=(sumValue)=>{
    
    // const regex = /^\d+$/;

    // setSum(sumValue.replace(/\D/g,'')+' $');
    setSum(sumValue);
    console.log(sum);
  }
  return (
    <div className={s.container}>
      <Employee/>
      <Sum onChangeSum={handleSum} value={sum}/>
      <Rating/>
      <Payment sum={sum}/>
    </div>
  );
}

export default App;
