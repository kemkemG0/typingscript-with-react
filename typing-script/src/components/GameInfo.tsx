import React from "react";
import { useSelector } from "react-redux";
import { GameState } from "../features/game";

const GameInfo: React.FC = () => {
  const allCount = useSelector((state: GameState) => state.allInputCount);
  const okCount = useSelector((state: GameState) => state.doneCharCount);

  const result = (okCount / allCount) * 100 || 0;
  return <div>正答率は{result.toFixed(2)}%です</div>;
};

export default GameInfo;
