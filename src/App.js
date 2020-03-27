import React, { Component } from 'react';
import Header from './components/Header/Header';
import Headline from './components/Headline/index'
import './app.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <section className='main'>
          <Headline header='Posts' desc='Click on this button to render Post' />
        </section>
      </div>
    )
      
  }
}

export default App;
