import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import ExpansionSelector from "./components/ExpansionSelector";
import PlayerNumberSelector from "./components/PlayerNumberSelector";
import SideSelector from "./components/SideSelector";
import DraftSelector from "./components/DraftSelector";
import RandomizeButton from "./components/RandomizeButton";
import Results from "./components/Results";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./assets/css/App.scss";
const shuffle = require("shuffle-array");
const GOOGLE_SHEET_BASE = "https://sheets.googleapis.com/v4/spreadsheets";
const GOOGLE_SHEET_ID = process.env.REACT_APP_SHEET_ID;
const API_KEY = process.env.REACT_APP_API;

function App() {
  const [data, updateDataArr] = useState([]);

  let dataArr = [];
  let wonders = [];

  function getValues(values) {
    if (values.expansionsArr.length < 1) {
      toast.warning("Please select at least one wonders pack",  {
        toastId: 'warning1',
    });
      return;
    }

    wonders = JSON.parse(localStorage.getItem("wonders"));

    const wondersArr = wonders.filter((object) => {
      return values.expansionsArr.includes(object.expansion);
    });

    shuffle(wondersArr);

    //Check if there are enough wonders for selected expansions
    if (values.draft && values.numberOfPlayers * 3 > wondersArr.length) {
      updateDataArr([]);
      toast.warning("There are not enough wonders for everyone.\nPlease include more packs.", {
        toastId: 'warning2'
    });
      return;
    } else if (!values.draft && values.numberOfPlayers > wondersArr.length) {
      updateDataArr([]);
      toast.warning("There are not enough wonders for everyone.\nPlease include more packs.", {
        toastId: 'warning2'
    });
      return;
    }

    //Loop through players
    for (let index = 0; index < values.numberOfPlayers; index++) {
      let currentPlayerWondersArr = [];
      let y;

      values.draft ? (y = 3) : (y = 1);

      //Loop through draft mode (1 or 3 times)
      for (let i = 0; i < y; i++) {
        let currentWonder = {};

        let randomWonder = wondersArr.splice(
          (Math.random() * wondersArr.length) | 0,
          1
        )[0];

        currentWonder.name = randomWonder.name;
        currentWonder.expansion = randomWonder.expansion;

        switch (values.sides) {
          case false:
            currentWonder.side = "";
            break;
          case true:
            let rand = Math.random() < 0.5;
            if (rand) {
              currentWonder.side = "A";
            } else {
              currentWonder.side = "B";
            }
            break;

          default:
            break;
        }
        currentPlayerWondersArr.push(currentWonder);
      }
      dataArr.push(currentPlayerWondersArr);
    }
    updateDataArr(dataArr);
  }

  async function fetchWonders() {
    //Load wonders from Sheet

    let response = await fetch(
      `${GOOGLE_SHEET_BASE}/${GOOGLE_SHEET_ID}/values/Sheet1?valueRenderOption=FORMATTED_VALUE&key=${API_KEY}`
    );

    if (response.ok) {
      let fetchedWonders = await response.json();

      //Convert array of arrays to array of objects
      fetchedWonders = fetchedWonders.values.map((x) => ({
        name: x[0],
        expansion: x[1],
      }));

      localStorage.setItem("wonders", JSON.stringify(fetchedWonders));
    }
  }

  useEffect(() => {
    //Fetch Wonders from GoogleSheet on app load
    fetchWonders();
  }, []);

  return (
    <div className="App">
      <ToastContainer
        position="top-left"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        draggable
        pauseOnHover
        theme="dark"
        limit={3}
        pauseOnFocusLoss={false}
        icon={false}
      />
      <Header />
      <div className="main">
        <ExpansionSelector />
        <PlayerNumberSelector />
        <div className="selector-wrap">
          <SideSelector />
          <DraftSelector />
        </div>
        <RandomizeButton func={getValues} />
        <Results data={data} />
      </div>
    </div>
  );
}

export default App;
