import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { changeSide } from "../sidesSlice";
import Switch from "react-switch";

function SideSelector(props) {
  const [changeSideState, setChangeSide] = useState(true);
  const dispatch = useDispatch();

  const handleChange = () => {
    setChangeSide((current) => !current);
    let sideState = !changeSideState;
    dispatch(changeSide(sideState));
  };


  return (
    <div className="sides">
      <p>Random side</p>

      <Switch
        onChange={handleChange}
        checked={changeSideState}
        onColor="#665600"
        offColor="#665600"
        onHandleColor="#ffd700"
        offHandleColor="#ffd700"
        borderRadius={10}
        handleDiameter={30}
        height={25}
        width={60}
        className={`react-switch ${changeSideState ? "active" : ""}`}
        id="material-switch"
      />
    </div>
  );
}

export default SideSelector;
