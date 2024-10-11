import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'; // App.js에서 APP 함수를 로딩한다.
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
    // index.html에 있는 root를 ID로 가진 요소를 지정한다.
  document.getElementById('root') as HTMLElement
);
root.render(
    //화면에 그릴 JSX 태그를 지정한다.
  <React.StrictMode>
      {/* App은 src/App.tsx로부터 임포트 한 것을 사용한다.*/}
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
