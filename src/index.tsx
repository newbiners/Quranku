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
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import { useSelector } from 'react-redux';
import { RootState } from './reducers/redux/store/store';
import useOpemApp from './commons/useOpenApp';
import Loading from './commons/loading';
import {
  Home,
  SuratScreen,
  DetailJuz,
  DetailSurat,
  BookmarkScreen,
  TasbihScreen,
  AudioQuranScreen,
  TajwidScreen,
  InfoAplikasi
} from './screen';
const Stack = createStackNavigator();

function Screen() {
  const { addDataFistrOpen, loading } = useOpemApp()
  const Style = useSelector((state: RootState) => state.myStyle.value);
  const isDarkMode = useColorScheme() === Style.active;
  useEffect(() => {
    addDataFistrOpen()
  }, [])

  if (loading === true) {
    return <Loading />
  }
  return (
    <NavigationContainer>
      <StatusBar
        barStyle={Style.bgBox == "#0A4D68" ? 'light-content' : 'dark-content'}
        backgroundColor={Style.bgBox}
      />
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          animationTypeForReplace: 'push',
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}>
        <Stack.Screen name="home" component={Home} />
        <Stack.Screen name="surat" component={SuratScreen} />
        <Stack.Screen name="detail-surat" component={DetailSurat} />
        <Stack.Screen name="detail-juz" component={DetailJuz} />
        <Stack.Screen name="bookmark" component={BookmarkScreen} />
        <Stack.Screen name='tasbih' component={TasbihScreen} />
        <Stack.Screen name='audio-quran' component={AudioQuranScreen} />
        <Stack.Screen name='tajwid' component={TajwidScreen}/>
        <Stack.Screen name='info-aplikasi' component={InfoAplikasi}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Screen;
