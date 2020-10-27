import React from "react";
import Grid from "./Grid";
import Buttons from "./Button";
import Presets from "./Presets";

import "./App.css";

const cleanGrid = (height, width) => {
  const h = height;
  const w = width;
  const cleanGrid = [];
  for (var i = 0; i < w; i++) {
    cleanGrid.push([]);
    for (var j = 0; j < h; j++) {
      cleanGrid[i].push({ y: i, x: j });
    }
  }
  console.log(cleanGrid)
  return cleanGrid;
};

const createRandomBoard = (height, width) => {
  const h = height;
  const w = width;
  const randomBoard = [];

  for (var i = 0; i < w; i++) {
    randomBoard.push([]);
    for (var j = 0; j < h; j++){
      if (Math.random() >= 0.5) {
        randomBoard[i].push({
          y: i,
          x: j,
          color:"",
          alive: true
        });
      } else {
        randomBoard[i].push({y:i, x:j, color:"", alive: false})
      }
    }
  }
  console.log(randomBoard)
};


const preset1 = (height, width, cell) => {
  const h = height;
  const w = width;
  const preset1Grid = [];
  for (var i = 0; i < w; i++) {
    preset1.push([]);
    for (var j = 0; j < h; j++) {
      preset1[i].push({ y: i, x: j });
    }
  }
  cell[8][10].alive = true
  cell[9][10].alive = true
  cell[8][11].alive = true
  cell[9][11].alive = true
  return preset1Grid;
};

const preset2 = (height, width, cell) => {
  const h = height;
  const w = width;
  const preset2Grid = [];
  for (var i = 0; i < w; i++) {
    preset2.push([]);
    for (var j = 0; j < h; j++) {
      preset2[i].push({ y: i, x: j });
    }
  }
  cell[9][11].alive = true
  cell[9][12].alive = true
  cell[10][10].alive = true
  cell[10][13].alive = true
  cell[11][11].alive = true
  cell[11][12].alive = true
  return preset2Grid;
};

const preset3 = (height, width, cell) => {
  const h = height;
  const w = width;
  const preset3Grid = [];
  for (var i = 0; i < w; i++) {
    preset3.push([]);
    for (var j = 0; j < h; j++) {
      preset3[i].push({ y: i, x: j });
    }
  }
  cell[1][6].alive = true
  cell[2][6].alive = true
  cell[3][6].alive = true
  cell[2][4].alive = true
  cell[3][5].alive = true
  return preset3Grid;
};


class App extends React.Component {
  constructor() {
    super();

    this.row = 25;
    this.col = 25;

    this.state = {
      board: cleanGrid(this.col, this.row),
      gen: 0,
      speed: 0,
      isPlaying: false,
      background: "#05386b"
    };
  }

  start = () => {
    this.setState.speed = 50;
  };

  stop = () => {
    this.setState.speed = 0;
  };

  randomBoard = () => {
    this.setState({
      board: createRandomBoard(this.col, this.row),
      Gen: 0
    });
  };

  clearGrid = () => {
    this.setState({ board: cleanGrid(this.col,this.row), Gen: 0 });
  }

  // changeColor =() => {}

  onClickCell = (i, j, ) => {;
  this.setState((prevState) => {
    const newBoard = JSON.parse(JSON.stringify(prevState.board));
    newBoard[i][j].alive === false
      ? (newBoard[i][j] = {
          y: i,
          x: j,
          color: this.state.color,
          alive: true
        })
      : (newBoard[i][j] = { y: i, x: j, color: "", age: 0, alive: false });
    return { board: newBoard };
  });
}


  // countNeighbors = (cell, i, j) => {
  // map through total board and make new board with neighbor cell counts
  //   //count the alive cells around each cell
  //
  // };
  
  boardRules = (cell, i, j) => {
    //map through cells in countNeighbor board and run switch statement
    switch (true) {
      case(this.countNeighbor <= 1 | this.countNeighbor >= 4):
        cell[i][j].alive = false
        break;
      case(this.countNeighbor = 2):
        cell[i][j].alive = true
        break;
      case(this.countNeighbor = 3):
        cell[i][j].alive = true
        break;
      default:
        console.log('default hit for board rules')
    }  }

  render() {
    return (
      <div className="App">
        <h1>Conway's Game of Life </h1>
        <Buttons
        clearGrid={this.clearGrid}
        />
        <h2>Generations:{this.state.gen}</h2>
        <Grid grid={this.state.board} onClickCell={this.onClickCell} />
        <Presets randomBoard ={this.randomBoard} />
        <h2>Rules</h2>
        <p className="rules">
          1. Any live cell with fewer than two live neighbours dies, as if by
          underpopulation.
          <br />
          2. Any live cell with two or three live neighbours lives on to the
          next generation.
          <br />
          3. Any live cell with more than three live neighbours dies, as if by
          overpopulation.
          <br />
          4. Any dead cell with exactly three live neighbours becomes a live
          cell, as if by reproduction.
        </p>
        <h2>About the Algorithm</h2>
        <p className="about">
          John Conway created this game in 1970. Cellular automaton is any
          system in which rules are applied to cells and their neighbors in a
          regular grid. The game has no player, and only one move in the
          begining. John Conway is a Mathematician and choose carefully when
          making the rules. These rules simulate life, and in most cases the
          outcome can not be determined before the simulation is run.
        </p>
      </div>
    );
  }
}
export default App;
