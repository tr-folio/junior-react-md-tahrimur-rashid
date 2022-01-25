import React from 'react';
import './App.css';
import Header from './Components/Shared/header';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Junior React Assignment</h1>
        <Header></Header>
      </div>
    );
  }
}

export default App;
