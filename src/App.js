import React, { Component } from 'react';
import './App.css';
import ChannelList from './components/ChannelList/ChannelList';

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Creator Ninja</h1>
        </header>
        <ChannelList />
      </div>
    );
  }
}

export default App;
