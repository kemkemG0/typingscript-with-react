import React, { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import { changeDisplayType } from "../features/game";
import { game, gamedisplay, textblock } from "./style";

const InitialStage: React.FC = () => {
  const dispatch = useDispatch();

  const keyLog = useCallback((event) => {
    const payload = "GAME";
    if (event.keyCode === 32 || event.keyCode === 13)
      dispatch(changeDisplayType(payload));
  }, []);
  // キープッシュのイベントリスナー登録
  useEffect(() => {
    // 最初だけ登録してる
    window.addEventListener("keydown", keyLog, false);
    return () => {
      window.removeEventListener("keydown", keyLog, false);
    };
  }, []);

  return (
    <div style={game}>
      <div style={gamedisplay}>
        <div style={textblock}>SpaceまたはEnterを押してください</div>
      </div>
    </div>
  );
};

export default InitialStage;
