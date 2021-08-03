import React from "react";

interface Props {
  alphabets: string;
  ind: number;
}
const AlphabetLabel: React.FC<Props> = (props) => {
  const { alphabets = "KONNICHIHA SEKAI" } = props;
  return <div>{alphabets}</div>;
};

export default AlphabetLabel;
