import React from "react";

interface Props {
  result: number;
}
const GameInfo: React.FC<Props> = (props) => {
  const { result = 75 } = props;
  return <div>正答率は{result}%です</div>;
};

export default GameInfo;
