/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface GameState {
  contentsID: number;
  rawString: string;
  alphabetString: string;
  listeningCharIndex: number;
  allInputCount: number;
}

const contents: string[][] = [
  ["こんにちは世界", "KONNITIHASEKAI"],
  ["22こんにちは世界22", "22KONNITIHASEKAI22"],
  ["33こんにちは世界33", "33KONNITIHASEKAI33"],
  ["44こんにちは世界44", "44KONNITIHASEKAI44"],
  ["55こんにちは世界55", "55KONNITIHASEKAI55"],
  ["66こんにちは世界66", "66KONNITIHASEKAI66"],
];

const initialState: GameState = {
  contentsID: 0,
  rawString: contents[0][0],
  alphabetString: contents[0][1],
  listeningCharIndex: 0,
  allInputCount: 0,
};

// createSliceとは、actionの定義とaction creator,reducerをまとめて生成できる。
export const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    keypressed: (state, action) => {
      const { pressedKeyCode } = action.payload;
      const listeningChar = state.alphabetString[state.listeningCharIndex];

      // Redux Tool Kitではstateを直接変更してもOK！！

      state.allInputCount += 1;
      state.listeningCharIndex += 1;
      if (String.fromCharCode(pressedKeyCode) === listeningChar) {
        console.log("listing ", listeningChar, " and OK.");
      }

      return state;
    },
  },
});

export const { keypressed } = gameSlice.actions;
