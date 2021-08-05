import { useSelector } from "react-redux";
import React from "react";
import GameStage from "./components/GameStage";
import "./App.css";
import { GameState } from "./features/game";
import InitialStage from "./components/InitialStage";
import ResultStage from "./components/ResultStage";

const App: React.FC = () => {
  switch (useSelector((state: GameState) => state.displayType)) {
    case "INIT":
      return <InitialStage />;
    case "GAME":
      return <GameStage />;
    default:
      return <ResultStage />;
  }
};

export default App;
