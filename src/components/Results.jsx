import React from "react";

function RandomizeButton({ data }) {

  return (
    <div className="result">
      {data.map((wonders, key) => (
        <div className="result__player" key={key}>
          <div className="result__player-number">{key + 1} </div>

          {wonders.map((wonder, key) => (
            <div className="result__wonder" key={key}>
              <div className="result__wonder-name">{wonder.name}</div><div>{wonder.side ? " - "+wonder.side : ""}</div><div className="result__wonder-expansion">({wonder.expansion})</div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default RandomizeButton;
