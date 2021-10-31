import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'

import React from 'react';
import { render } from '@testing-library/react';
import Todo from './components/Todo';


class App  extends React.Component {
  constructor(props) {
    super(props);
  }
  render(){
    return(
  <div className="App">
      <Header/>
      <Todo/>
      <Footer/>
    </div>);
  }
  
}

export default App;
