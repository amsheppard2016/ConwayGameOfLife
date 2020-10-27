import React from "react";

const Presets = ({ preset1, preset2, preset3, randomBoard}) => {
  return (
    <div className="presets">
      <button className="preset-button" type="button" onClick={() => preset1()}>
        Preset 1
      </button>

      <button className="preset-button" type="button" onClick={() => preset2()}>
        Preset 2
      </button>

      <button className="preset-button" type="button" onClick={() => preset3()}>
        Preset 3
      </button>

      <button className="preset-button" type="button" onClick={() => randomBoard()}>
        Random Board
      </button>
    </div>
  );
};

export default Presets;