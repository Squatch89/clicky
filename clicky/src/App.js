import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Wrapper from './components/Wrapper/Wrapper';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Jumbo from './components/Jumbo/Jumbo'
import Images from './components/Images/Image';

class App extends Component {
  render() {
    return (
      <Wrapper>
          <Header />
          <Jumbo />
          <Images />
          <Footer />
      </Wrapper>
    );
  }
}

export default App;
