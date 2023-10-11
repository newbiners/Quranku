/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React, { useEffect, useState } from 'react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { StatusBar, useColorScheme } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useSelector } from 'react-redux';
import { RootState } from './reducers/redux/store/store';
import Home from './screen/Home';
import SuratScreen from './screen/suratScreen';
import addFetchDataControllers from './reducers/viewControllers/addFetchDataController';
import Loading from './commons/loading';
const Stack = createStackNavigator();

function Screen() {
  const { cekdata } = addFetchDataControllers();
  const [loading, setLoading] = useState<boolean>(false)
  const Style = useSelector((state: RootState) => state.myStyle.value);
  const isDarkMode = useColorScheme() === Style.active;
  const backgroundStyle = {
    backgroundColor: isDarkMode ? '#0A4D68' : '#ffff',
  };

  // useEffect(() => {
  //   setLoading(true);
  //   cekdata();
  //   setTimeout(() => {
  //     setLoading(false)
  //   },1000)
  // }, [])

  // if (loading === true) {
  //   return <Loading/>
  // }
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
