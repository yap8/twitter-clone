import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserState, User } from '../types/user';

const initialState: UserState = {
  user: null,
  loading: false,
  error: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<User>) {
      state.user = action.payload;
    },
  },
});

export default userSlice.reducer;
