import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { changeDraft } from "../draftSlice";
import Switch from "react-switch";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function DraftSelector(props) {
  const [changeDraftMode, setChangeDraft] = useState(false);
  const dispatch = useDispatch();

  const handleChange = () => {
    setChangeDraft((current) => !current);
    let draftState = !changeDraftMode;

    dispatch(changeDraft(draftState));
  };

  const draftModeInfo = () =>
    toast.info(
      "When Draft mode is enabled, each player gets 3 random wonders to choose from.",
      {
        autoClose: 6000,
        toastId: 'info'
      }
    );

  return (
    <div className="sides">
      <p>
        Draft mode <span onClick={draftModeInfo}>?</span>
      </p>
      <Switch
        onChange={handleChange}
        checked={changeDraftMode}
        onColor="#665600"
        offColor="#665600"
        onHandleColor="#ffd700"
        offHandleColor="#ffd700"
        borderRadius={10}
        handleDiameter={30}
        height={25}
        width={60}
        className={`react-switch ${changeDraftMode ? "active" : ""}`}
        id="material-switch"
      />
    </div>
  );
}

export default DraftSelector;
