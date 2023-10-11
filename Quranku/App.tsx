/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React from 'react';
import {ProviderStore} from './src/reducers/redux/Provider';

import Screen from './src';

function App(): JSX.Element {
  return (
    <ProviderStore>
      <Screen />
    </ProviderStore>
  );
}

export default App;
