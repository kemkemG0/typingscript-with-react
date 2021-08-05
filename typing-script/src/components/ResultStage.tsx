import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeDisplayType, GameState } from "../features/game";
import { game, gamedisplay, gameinfo, textblock } from "./style";

const ResultStage: React.FC = () => {
  const { allInputCount, doneCharCount, timeCount } = useSelector(
    (state: GameState) => state
  );
  const result = (doneCharCount / allInputCount) * 100 || 0;
  const score = (result * result * result) / timeCount / 10;
  const dispatch = useDispatch();
  return (
    <div style={game}>
      <div style={gameinfo}>
        <br />
        入力数:{allInputCount} 正解数:{doneCharCount}ミス:
        {allInputCount - doneCharCount}正答率:{result.toFixed(2)}%
      </div>
      <div style={gamedisplay}>
        <div>TIME:{timeCount.toFixed(2)}秒</div>
        <div style={textblock}>
          SCORE: {score.toFixed(0)}
          <div>
            <button
              type="button"
              onClick={() => {
                dispatch(changeDisplayType("INIT"));
              }}
            >
              PLAY AGAIN
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultStage;
