import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';

function Intro() {
  return (
    <div>
      <h1>This is a heading.</h1>
      <p>This is a paragraph.</p>
    </div>
  )
}

function Colours() {
  return (
    <ul>
      <li>red</li>
      <li>yellow</li>
      <li>blue</li>
    </ul>
  )
}

function Numbers() {
  return (
    <ol>
      <li>one</li>
      <li>two</li>
      <li>three</li>
    </ol>
  )
}

function MyInfo() {
  return (
    <div>
      <h1>My name is Vivian</h1>
      <p>I'm 27 and I'm learning how to code using React.</p>
      <p>My top 3 vacation spots are the following:</p>
      <ul>
        <li style={{ color: 'orange' }}>Singapore</li>
        <li style={{ color: 'orange' }}>Mexico</li>
        <li style={{ color: 'orange' }}>Taiwan</li>
      </ul>
    </div>
  )
}

ReactDOM.render(
  /*
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  */
  <div>
    <Intro />
    <Colours />
    <Numbers />
    <MyInfo />
  </div>,

  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
