import React from 'react';
import {View} from 'react-native';
import {Header} from '../components';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import JuzScreen from './juzScreen';
import Surat from './surat';
import { StyleSuratScreen } from '../styles';
const Tab = createMaterialTopTabNavigator();
function SuratScreen({navigation}:any) {
  const {styles, tabNavStyle} = StyleSuratScreen();
  return (
    <>
      <View style={styles.boxHeader}>
        <Header
          logo={true}
          titleHeader="Quranku"
          navigation={navigation}
          menu="menuNav"
        />
      </View>
      <Tab.Navigator
        screenOptions={tabNavStyle}>
        <Tab.Screen name="Surat" component={Surat} />
        <Tab.Screen name="Juz" component={JuzScreen} />
      </Tab.Navigator>
    </>
  );
}

export default SuratScreen;
