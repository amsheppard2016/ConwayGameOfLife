import React from "react";

const Buttons = ({ start, stop, clearGrid, changeColor}) => {
  return (
    <div>
      <button className="button" type="button" onClick={() => start()}>
        Start
      </button>

      <button className="button" type="button" onClick={() => stop()}>
        Stop
      </button>

      <button className="button" type="button" onClick={() => clearGrid()}>
        Clear Board
      </button>

      <button className="button" type="button" onClick={() => changeColor()}>
        Random Color
      </button>
    </div>
  );
};
export default Buttons;
