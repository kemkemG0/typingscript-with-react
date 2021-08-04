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
  listeningCharIndex: 3,
  allInputCount: 0,
};

// createSliceとは、actionの定義とaction creator,reducerをまとめて生成できる。
export const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    keypressed: (state, action) => {
      // ここでいろんな実装を行う
      /*
        --やる実装--
          --押されたキーの正誤判定
          (--正答率は表示部分で計算したほうが良い気がする)

          次の文字に進む処理
          それが最後の文字だったら、次の文字列に進む処理
      */

      const newState = {
        ...state,
        allInputCount: state.allInputCount + action.payload,
      };
      return newState;
    },
  },
});

export const { keypressed } = gameSlice.actions;
