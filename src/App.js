import React from 'react';
import './App.css';
import Calculator0 from './Calculator0';
import { Route, Routes } from 'react-router-dom';
import Calculator from './Calculator';
import Menu from './Menu'

// https://gogoadl.tistory.com/57
// 버전이 6이므로 component 대신 element 사용하기
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" exact element={<Menu />} />
        <Route path="/Calculator0" element={<Calculator0 />} />
        <Route path="/Calculator" element={<Calculator />} />
      </Routes>
    </div>
  );
}
export default App;

