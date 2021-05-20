import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import MyInfo from "./myComponents/MyInfo"

const paraStyles = {
  color: "pink",
  fontWeight: "900",
  backgroundColor: "red"
}

function Intro() {
  return (
    <div>
      <h1>This is a heading.</h1>
      <p style={paraStyles}>This is a paragraph.</p>
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
