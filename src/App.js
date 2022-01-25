import React from 'react';
import './App.css';
import All from './Components/All/All';
import Clothes from './Components/Clothes/Clothes';
import NotFound from './Components/NotFound/NotFound';
import Tech from './Components/Tech/Tech';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.displayNone = {
      display: 'none'
    };
  }

  displayAll() {
    window.location.pathname = "/all";
  }
  displayClothes() {
    window.location.pathname = "/clothes";
  }
  displayTech() {
    window.location.pathname = "/tech";
  }

  render() {
    window.onload = function() {
      const currentPath = window.location.pathname;

      if (currentPath === "/") {
        document.getElementById('all').style.display = 'block';
        document.getElementById('clothes').style.display = 'none';
        document.getElementById('tech').style.display = 'none';
        document.getElementById('not-found').style.display = 'none';
      } else if (currentPath === "/all") {
        document.getElementById('all').style.display = 'block';
        document.getElementById('clothes').style.display = 'none';
        document.getElementById('tech').style.display = 'none';
        document.getElementById('not-found').style.display = 'none';
      } else if (currentPath === "/clothes") {
        document.getElementById('all').style.display = 'none';
        document.getElementById('clothes').style.display = 'block';
        document.getElementById('tech').style.display = 'none';
        document.getElementById('not-found').style.display = 'none';
      } else if (currentPath === "/tech") {
        document.getElementById('all').style.display = 'none';
        document.getElementById('clothes').style.display = 'none';
        document.getElementById('tech').style.display = 'block';
        document.getElementById('not-found').style.display = 'none';
      } else {
        document.getElementById('all').style.display = 'none';
        document.getElementById('clothes').style.display = 'none';
        document.getElementById('tech').style.display = 'none';
        document.getElementById('not-found').style.display = 'block';
      }
    }

    return (
      <div className="App">
        <h1>Junior React Assignment</h1>
        <p>
          <button onClick={this.displayAll}>All</button> &nbsp;
          <button onClick={this.displayClothes}>Clothes</button> &nbsp;
          <button onClick={this.displayTech}>Tech</button> &nbsp;
        </p>
        <div id="page-container">
          <div id="all" style={this.displayNone}><All/></div>
          <div id="clothes" style={this.displayNone}><Clothes/></div>
          <div id="tech" style={this.displayNone}><Tech/></div>
          <div id="not-found" style={this.displayNone}><NotFound/></div>
        </div>
      </div>
    );
  }
}

export default App;
