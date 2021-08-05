import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GameState, setTimeCount } from "../features/game";

const GameInfo: React.FC = () => {
  const allCount = useSelector((state: GameState) => state.allInputCount);
  const okCount = useSelector((state: GameState) => state.doneCharCount);
  const result = (okCount / allCount) * 100 || 0;

  const dispatch = useDispatch();

  const nowTime = useSelector((state: GameState) => state.timeCount);
  if (nowTime === 0) dispatch(setTimeCount(performance.now()));
  const prevTime = useSelector((state: GameState) => state.timeCount);

  // let prevTime = 0;
  // if (nowTime === 0) prevTime = performance.now();
  // if (nowTime !== 0) prevTime = nowTime;

  useEffect(() => {
    const timer = setInterval(() => {
      dispatch(setTimeCount((performance.now() - prevTime) / 1000));
    }, 5);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      経過時間:{nowTime.toFixed(2)}秒<div>正答率は{result.toFixed(2)}%です</div>
    </>
  );
};

export default GameInfo;
