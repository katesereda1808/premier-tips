import { useState } from 'react';
import { Employee } from '../Employee/Employee';
import { Sum } from '../Sum/Sum';
import { Rating } from '../Rating/Rating';
import { Payment } from '../Payment/Payment';

function MainPage() {
  const [sum, setSum] = useState('');
  const handleSum = (sumValue) => {
    setSum(sumValue);
    // setSum(() => {
    //   return sumValue;
    // });
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
