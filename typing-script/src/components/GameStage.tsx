import React, { useEffect, useCallback } from "react";
import { useDispatch } from "react-redux";
import { game, gamedisplay, gameinfo, textblock } from "./style";
import AlphabetLabel from "./AlphabetLabel";
import RawStringLabel from "./RawStringLabel";
import GameInfo from "./GameInfo";

const GameStage: React.FC = () => {
  const keyLog = useCallback((event) => {
    console.log(String.fromCharCode(event.keyCode), "is Pressed!!");
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
        <GameInfo result={75} />
      </div>
      <div style={gamedisplay}>
        <div style={textblock}>
          <RawStringLabel rawString="こんにちは 世界" />
          <AlphabetLabel alphabets="KONNITIHA SEKAI" ind={4} />
        </div>
      </div>
    </div>
  );
};

export default GameStage;
