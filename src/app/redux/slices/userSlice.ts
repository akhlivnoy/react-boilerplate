import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IUserState {
  name: string;
  password: string;
}

const INITIAL_STATE: IUserState = {
  name: '',
  password: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState: INITIAL_STATE,
  reducers: {
    login(state, { payload: { name, password } }: PayloadAction<IUserState>) {
      state.name = name;
      state.password = password;
    },
    logout(state) {
      state.name = '';
      state.password = '';
    },
  },
});
