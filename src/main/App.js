import React from 'react'
import { BrowserRouter as Router } from  'react-router-dom'

import Header from '../Components/Header'
import Menu from '../Components/Menu'
import Content from '../Components/Content'
import Footer from '../Components/Footer'
import Aside from '../Components/Aside';
import './App.css'


function App() {
  return (
    <div className="App">
    <Router>
      <Menu/>
      <Content/>
    </Router>
      <Header/>
      <Aside/>
      <Footer/>
    </div>
  );
}

export default App;
