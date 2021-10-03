import React from 'react'
import Rectangle from './Components/Rectangle.jsx';
import NavMenu from './Components/Nav.jsx'
import Header from './Components/Header.jsx'
import Main from './Components/Main.jsx'
import Footer from './Components/Footer.jsx'
import style from './style.css'

function App() {
  return (
    <div className="App"> 
      <Rectangle />
      <NavMenu />
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
