import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeDisplayType, GameState } from "../features/game";

const InitialStage: React.FC = () => {
  const dispatch = useDispatch();

  const displayType = useSelector((state: GameState) => state.displayType);

  const keyLog = useCallback((event) => {
    console.log(String.fromCharCode(event.keyCode), "is Pressed!!");
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

  return <div>初期画面です！</div>;
};

export default InitialStage;
