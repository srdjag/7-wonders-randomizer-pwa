import React from "react";
import { useDispatch } from "react-redux";
import { setPlayers } from "../playerNumberSlice";
import Slider from "@mui/material/Slider";

function PlayerNumberSelector(props) {
  const dispatch = useDispatch();


  function sliderChanged(event) {
    dispatch(setPlayers(event.target.value));
  }

  return (
    <div className="player-number">
      <p>Number of players</p>
      <Slider
      size="large"
        aria-label="Number of players"
        defaultValue={5}
        color="secondary"
        step={1}
        marks
        min={3}
        max={7}
        valueLabelDisplay="on"
        onChange={sliderChanged}
      />
    
    </div>
  );
}

export default PlayerNumberSelector;
