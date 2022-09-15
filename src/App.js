import s from './App.module.css';
import { Employee } from './components/Employee/Employee';
import { Sum } from './components/Sum/Sum';
import { Rating } from './components/Rating/Rating';
import { Payment } from './components/Payment/Payment';

function App() {
  return (
    <div className={s.container}>
      <Employee/>
      <Sum/>
      <Rating/>
      <Payment/>
    </div>
  );
}

export default App;
