import React from 'react';
import logo from './logo.svg';
import './App.css';

//함수로 App이라는 컴포넌트를 정의한다.
function App() {
  // App 컴포넌트에서는 HTML 요소를 반환한다.
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
// 정의한 App을 default로 익스포트 한다.
export default App;
