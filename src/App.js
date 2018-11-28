import React, { Component } from 'react';
import Header from './Components/Header';
import NavBar from './Components/NavBar';
import Router from './router';
import Footer from './Components/Footer';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <NavBar />
        <Router />
        <Footer />
      </div>
    );
  }
}

export default App;
