/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {StatusBar, useColorScheme} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {useSelector} from 'react-redux';
import {RootState} from '../redux/store/store';
import Home from './molekul/Home';
import SuratScreen from './molekul/suratScreen';

const Stack = createStackNavigator();

function Screen() {
  const Style = useSelector((state: RootState) => state.myStyle.value);
  const isDarkMode = useColorScheme() === Style.active;
  const backgroundStyle = {
    backgroundColor: isDarkMode ? '#0A4D68' : '#ffff',
  };
  return (
    <NavigationContainer>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="home" component={Home} />
        <Stack.Screen name="surat" component={SuratScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Screen;
