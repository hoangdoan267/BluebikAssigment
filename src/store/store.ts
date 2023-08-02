import {configureStore} from '@reduxjs/toolkit';
import configSlice from './slices/configSlice';
import onboardingUserSlice from './slices/onboardingUserSlice';

export const store = configureStore({
  reducer: {
    config: configSlice,
    onboardingUser: onboardingUserSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
