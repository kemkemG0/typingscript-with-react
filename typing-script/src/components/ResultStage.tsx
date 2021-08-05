import React from "react";
import { useSelector } from "react-redux";
import { GameState } from "../features/game";
import { game, gamedisplay, gameinfo, textblock } from "./style";

const ResultStage: React.FC = () => {
  const { allInputCount, doneCharCount } = useSelector(
    (state: GameState) => state
  );
  const result = (doneCharCount / allInputCount) * 100 || 0;
  return (
    <div style={game}>
      <div style={gameinfo}>
        <br />
        入力数:{allInputCount} 正解数:{doneCharCount}ミス:
        {allInputCount - doneCharCount}正答率:{result.toFixed(2)}%
      </div>
      <div style={gamedisplay}>
        <div style={textblock}>終了！！</div>
      </div>
    </div>
  );
};

export default ResultStage;
