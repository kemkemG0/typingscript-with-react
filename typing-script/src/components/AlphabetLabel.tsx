import React from "react";
import { useSelector } from "react-redux";
import { GameState } from "../features/game";

const done: React.CSSProperties = {
  color: "darkgray",
};

const AlphabetLabel: React.FC = () => {
  const ind = useSelector((state: GameState) => state.listeningCharIndex);
  const alphabets = useSelector((state: GameState) => state.alphabetString);

  const doneAlpha = alphabets.substr(0, ind);
  const yetAlpha = alphabets.substr(ind);

  return (
    <div>
      <span style={done}>{doneAlpha}</span>
      <span>{yetAlpha}</span>
    </div>
  );
};

export default AlphabetLabel;
