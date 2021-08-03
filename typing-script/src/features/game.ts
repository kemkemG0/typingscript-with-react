import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface GameState {
  rawString: string;
  alphabetString: string;
  listeningCharIndex: number;
  allInputCount: number;
}

const initialState: GameState = {
  rawString: "こんにちは世界",
  alphabetString: "KONNITIHASEKAI",
  listeningCharIndex: 3,
  allInputCount: 5,
};

// createSliceとは、actionの定義とaction creator,reducerをまとめて生成できる。
export const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    keypressed: (state, action) => ({
      ...state,
      allInputCount: state.allInputCount + 1,
    }),
  },
});
