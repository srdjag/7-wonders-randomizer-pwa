import React from "react";
import store from "../store";
import { useDispatch } from "react-redux";
import { getValues } from "../randomizeSlice";

function RandomizeButton({func}) {
  const dispatch = useDispatch();

  const randomize = () => {

   dispatch(getValues(store.getState()));
   func(store.getState().randomizeSlice.value);
  };

  return (
    <div className="randomize-btn" onClick={randomize}>
      Randomize
    </div>
  );
}

export default RandomizeButton;
