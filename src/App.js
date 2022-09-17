import s from './App.module.css';
import React from 'react';
import { MainPage } from './components/MainPage/MainPage';

function App() {
  return (
    <div className={s.container} pointerEvents="none">
      <MainPage/>
    </div>
  );
}

export default App;
