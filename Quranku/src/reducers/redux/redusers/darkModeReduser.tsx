import {createSlice, PayloadAction} from '@reduxjs/toolkit';

type menuStyleProps = {
  value: {
    isActive: boolean;
    active: string;
    backgroundColor1: string;
    backgroundColor2: string;
    backgroundColor3: string;
    backgroundColor4: string;
    colorText1: string;
    colorText2: string;
    iconColor: string;
    bgBox: string;
  };
};

const initialState: menuStyleProps = {
  value: {
    isActive: false,
    active: 'light',
    backgroundColor1: '#99A98F',
    backgroundColor2: '#D6E8DB',
    backgroundColor3: '#159CAF',
    backgroundColor4: '#E6ECE8',
    colorText1: '#99A98F',
    colorText2: '#fff',
    iconColor: '#99A98F',
    bgBox: '#fff',
  },
};

export const myDarkMode = createSlice({
  name: 'myStyle',
  initialState,
  reducers: {
    activeMode: (state, action: PayloadAction<string>) => {
      if (action.payload === 'dark') {
        state.value = {
          isActive: true,
          active: 'dark',
          backgroundColor1: '#00FFCA',
          backgroundColor2: '#05BFDB',
          backgroundColor3: '#05BFDB',
          backgroundColor4: '#ffff',
          colorText1: '#fff',
          colorText2: '#000',
          iconColor: '#0A4D68',
          bgBox: '#0A4D68',
        };
      } else {
        state.value = {
          isActive: false,
          active: 'light',
          backgroundColor1: '#99A98F',
          backgroundColor2: '#D6E8DB',
          backgroundColor3: '#C1D0B5',
          backgroundColor4: '#E6ECE8',
          colorText1: '#99A98F',
          colorText2: '#fff',
          iconColor: '#99A98F',
          bgBox: '#fff',
        };
      }
    },
  },
});

export const {activeMode} = myDarkMode.actions;
export default myDarkMode.reducer;
