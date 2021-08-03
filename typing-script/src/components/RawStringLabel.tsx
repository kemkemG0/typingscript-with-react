import React from "react";

interface Props {
  rawString: string;
}
const RawStringLabel: React.FC<Props> = (props) => {
  const { rawString } = props;
  return <div>{rawString}</div>;
};

export default RawStringLabel;
