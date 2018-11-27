import React, { Component } from 'react';
import Header from './Components/Header';
import Router from './router';
import Footer from './Components/Footer';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Router />
        <Footer />
      </div>
    );
  }
}

export default App;
