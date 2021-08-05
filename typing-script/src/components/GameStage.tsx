import React, { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { game, gamedisplay, gameinfo, textblock } from "./style";
import AlphabetLabel from "./AlphabetLabel";
import RawStringLabel from "./RawStringLabel";
import GameInfo from "./GameInfo";
import { GameState, keypressed } from "../features/game";

const GameStage: React.FC = () => {
  const dispatch = useDispatch();
  const allInputCount = useSelector((state: GameState) => state.allInputCount);
  const keyLog = useCallback((event) => {
    console.log(String.fromCharCode(event.keyCode), "is Pressed!!");

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
          {allInputCount}
        </div>
      </div>
    </div>
  );
};

export default GameStage;
