import {configureStore} from '@reduxjs/toolkit';
import myStyleReduser from '../redusers/darkModeReduser';
export const store = configureStore({
  reducer: {
    myStyle: myStyleReduser,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
