import React from "react";
import AlphabetLabel from "./AlphabetLabel";
import RawStringLabel from "./RawStringLabel";

const GameStage: React.FC = () => {
  return (
    <div>
      <RawStringLabel rawString="こんにちは 世界" />
      <AlphabetLabel alphabets="KONNITIHA SEKAI" ind={4} />
    </div>
  );
};

export default GameStage;
