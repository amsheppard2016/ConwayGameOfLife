import React from 'react';
import './App.css';

class Grid extends React.Component{
  render(){
    return(
      <div>
        Grid
      </div>
    )
  }
}

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      generation: 0,
    }
  }

  render(){
    return (
      <div className="App">
        <header>
          <h1>Conway's Game Of Life</h1>
          <nav>
            <button>Play</button>
            <button>Stop</button>
            <button>Clear</button>
            <button>Grid Size</button>
          </nav>
        </header>
        <h2> Generations: {this.state.generation}</h2>
        <Grid></Grid>
        <div className="presets">
          <button>preset 1</button>
          <button>preset 2</button>
          <button>preset 3</button>
          <button>preset 4</button>
        </div>
      </div>
    );
  }
}

export default App;
