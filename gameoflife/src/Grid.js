import React from "react";

const Cell = ({ i, j, cell, onClickCell }) => {
  const id = `${i},${j}`;
  const cellSize ={
    width: '16px',
    height: '16px',
    border: '1px solid #000'
  }

  const isAlive = {
    background:`${cell.background}`
  }
  
  const isDead ={
    background: "#edf5e1"
  }

  const style = cell.alive
    ? Object.assign({}, cellSize, isAlive)
    : Object.assign({}, cellSize, isDead);

  return <td className="cell" id={id} style={style} onClick={() => onClickCell(i, j)} />;
};

const Row = ({ i, cell, onClickCell }) => {
  const rows = cell.map((cell, j) => (
    <Cell i={i} j={j} key={"c" + j} cell={cell} onClickCell={onClickCell} />
  ));
  return <tr>{rows}</tr>;
};

const Grid = ({ grid, onClickCell }) => {
  const trs = grid.map((cells, i) => (
    <Row i={i} key={"r" + i} cell={cells} onClickCell={onClickCell} />
  ));

  return (
    <table className="grid">
      <tbody>{trs}</tbody>
    </table>
  );
};
export default Grid;
