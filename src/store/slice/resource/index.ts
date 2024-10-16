import { SubMajor } from "@/services/schemas/major";
import { createSlice } from "@reduxjs/toolkit";

export interface InitialStateType {
  subMajors?: SubMajor[];
}

const initialState: InitialStateType = {
  subMajors: []
};

export const resourceSlice = createSlice({
  name: "resource",
  initialState,
  reducers: {
    setSubMajors: (state: InitialStateType, action) => {
      state.subMajors = action.payload;
    }
  },
});

export const { setSubMajors} = resourceSlice.actions;
export default resourceSlice.reducer;
