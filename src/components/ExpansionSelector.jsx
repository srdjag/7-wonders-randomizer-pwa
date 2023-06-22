import React from "react";
import ExpansionBtn from "./ExpansionBtn";
import { useDispatch } from "react-redux";
import { push } from "../expansionSlice";

function ExpansionSelector(props) {

  const dispatch = useDispatch();

  const selectExpansion = (exp) => {
    dispatch(push(exp))
  };

  return (
    <div className="selector">
      <p>Select wonder packs</p>
      <div className="selector__expansion-wrapper">
        <ExpansionBtn func={selectExpansion} name="Base" />
        <ExpansionBtn func={selectExpansion} name="Cities" />
        <ExpansionBtn func={selectExpansion} name="Leaders" />
        <ExpansionBtn func={selectExpansion} name="Armada" />
        <ExpansionBtn func={selectExpansion} name="Edifice" />
        <ExpansionBtn func={selectExpansion} name="Myths" />
        <ExpansionBtn func={selectExpansion} name="Ruins" />
        <ExpansionBtn func={selectExpansion} name="Frontiers" />
        <ExpansionBtn func={selectExpansion} name="Collection" />
        <ExpansionBtn func={selectExpansion} name="Game" />
      </div>
    </div>
  );
}

export default ExpansionSelector;
