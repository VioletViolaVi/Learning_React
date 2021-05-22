import React from "react";
import Header from './myComponents/HeaderContents/Header';
import Footer from './myComponents/FooterContents/Footer';
import Main from "./myComponents/MainContents/Main";

function App() {
  return (
    <React.StrictMode>
      <Header />
      <Main />
      <Footer />
    </React.StrictMode>
  );
}

export default App;