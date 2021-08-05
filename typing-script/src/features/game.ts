/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";

export interface GameState {
  contentsID: number;
  rawString: string;
  alphabetString: string;
  listeningCharIndex: number;
  allInputCount: number;
  doneCharCount: number;
  displayType: "INIT" | "GAME" | "RESULT";
  timeCount: number;
}

const contents: string[][] = [
  ["こんにちは世界", "KONNNITIHASEKAI"],
  ["22こんにちは世界22", "22KONNNITIHASEKAI22"],
  ["33こんにちは世界33", "33KONNNITIHASEKAI33"],
  ["44こんにちは世界44", "44KONNNITIHASEKAI44"],
  ["55こんにちは世界55", "55KONNNITIHASEKAI55"],
  ["66こんにちは世界66", "66KONNNITIHASEKAI66"],
];

const initialState: GameState = {
  contentsID: 0,
  rawString: contents[0][0],
  alphabetString: contents[0][1],
  listeningCharIndex: 0,
  allInputCount: 0,
  doneCharCount: 0,
  displayType: "INIT",
  timeCount: 0,
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

      if (String.fromCharCode(pressedKeyCode) === listeningChar) {
        state.listeningCharIndex += 1;
        state.doneCharCount += 1;
      }
      if (state.listeningCharIndex === state.alphabetString.length) {
        state.listeningCharIndex = 0;
        state.contentsID += 1;
        if (state.contentsID !== contents.length)
          [state.rawString, state.alphabetString] = contents[state.contentsID];
        else {
          state.displayType = "RESULT";
        }
      }
    },
    changeDisplayType: (state, action) => {
      if (action.payload === "INIT") {
        state = initialState;
      } else state.displayType = action.payload;
      return state;
    },
    setTimeCount: (state, action) => {
      state.timeCount = action.payload;
    },
  },
});

export const { keypressed, changeDisplayType, setTimeCount } =
  gameSlice.actions;
