import React, { useEffect, useCallback } from "react";
import { useDispatch } from "react-redux";
import { game, gamedisplay, gameinfo, textblock } from "./style";
import AlphabetLabel from "./AlphabetLabel";
import RawStringLabel from "./RawStringLabel";
import GameInfo from "./GameInfo";
import { keypressed } from "../features/game";

const GameStage: React.FC = () => {
  const dispatch = useDispatch();
  const keyLog = useCallback((event) => {
    const payload: { pressedKeyCode: number } = {
      pressedKeyCode: event.keyCode,
    };

    dispatch(keypressed(payload));
  }, []);

  useEffect(() => {
    // 最初だけ登録してる
    window.addEventListener("keydown", keyLog, false);
    return () => {
      window.removeEventListener("keydown", keyLog, false);
    };
  }, []);

  return (
    <div style={game}>
      <div style={gameinfo}>
        <GameInfo />
      </div>
      <div style={gamedisplay}>
        <div style={textblock}>
          <RawStringLabel />
          <AlphabetLabel />
        </div>
      </div>
    </div>
  );
};

export default GameStage;
