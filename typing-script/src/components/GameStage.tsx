import React from "react";
import { game, gamedisplay, gameinfo, textblock } from "./style";
import AlphabetLabel from "./AlphabetLabel";
import RawStringLabel from "./RawStringLabel";
import GameInfo from "./GameInfo";

const GameStage: React.FC = () => {
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
