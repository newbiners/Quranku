import React from 'react';
import {View, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState} from '../reducers/redux/store/store';
import {Header} from '../components';
import {faGear, faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import JuzScreen from './juzScreen';
import Surat from './surat';
const Tab = createMaterialTopTabNavigator();
function SuratScreen() {
  const Style = useSelector((state: RootState) => state.myStyle.value);
  const styles = StyleSheet.create({
    boxHeader: {
      backgroundColor: Style.bgBox,
      zIndex: 999,
      paddingHorizontal: 10,
    },
  });
  return (
    <>
      <View style={styles.boxHeader}>
        <Header
          logo={true}
          iconLogo={faArrowLeft}
          titleHeader="Quranku"
          iconFontAwesome={faGear}
        />
      </View>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: {backgroundColor: Style.bgBox},
          tabBarLabelStyle: {color: Style.colorText1},
          tabBarItemStyle: {width: 100},
        }}>
        <Tab.Screen name="Surat" component={Surat} />
        <Tab.Screen name="Juz" component={JuzScreen} />
      </Tab.Navigator>
    </>
  );
}

export default SuratScreen;
