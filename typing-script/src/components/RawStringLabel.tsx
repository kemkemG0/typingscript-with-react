import React from "react";
import { useSelector } from "react-redux";
import { GameState } from "../features/game";

const RawStringLabel: React.FC = () => {
  const rawString = useSelector((state: GameState) => state.rawString);
  return <div>{rawString}</div>;
};

export default RawStringLabel;
