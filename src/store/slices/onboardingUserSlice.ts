import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';

export interface OnboardingUserState extends Record<string, any> {
  username?: string;
  idCardNumber?: string;
  email?: string;
  phone?: string;
  dateOfBirth?: string;
  purpose?: string[];
}

const initialState: OnboardingUserState = {
  username: '',
  idCardNumber: '',
  email: '',
  phone: '',
  dateOfBirth: '',
  purpose: [],
};

export const onboardingUserSlice = createSlice({
  name: 'onboardingUser',
  initialState,
  reducers: {
    update: (state, action: PayloadAction<OnboardingUserState>) => {
      Object.keys(action.payload).forEach(el => {
        state[el] = action.payload[el];
      });
    },
  },
});

export const {update} = onboardingUserSlice.actions;

export default onboardingUserSlice.reducer;
