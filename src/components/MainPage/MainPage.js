import { useState } from 'react';
import { Employee } from '../Employee/Employee';
import { Sum } from '../Sum/Sum';
import { Rating } from '../Rating/Rating';
import { Payment } from '../Payment/Payment';

function MainPage() {
  const [sum, setSum] = useState('');
  const handleSum = (sumValue) => {
    // setSum(sumValue.replace(/\D/g,'')+' $');
    // сначала символ валюты добавлялся здесь, но потом стало понятно, что лучше его добавлять в компоненте Sum
    setSum(sumValue);
  };
  return (
    <div>
      <Employee />
      <Sum handleSum={handleSum} value={sum} />
      <Rating />
      <Payment sum={sum} />
    </div>
  );
}

export { MainPage };
