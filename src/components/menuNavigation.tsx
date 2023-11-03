import React from 'react';
import {
  View,
  Text,
  Pressable,
} from 'react-native';
import Animated from 'react-native-reanimated';
import { faClose, faBook, faInfo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import DarkModeIndicator from './darkModeIndicator';
import { propsMenuState } from '../interfaces/stateInterfaces';
import { StyleMenuNav } from '../styles';
const navigateArray = [
  {
    fun: <DarkModeIndicator />,
    title: 'Dark Mode',
  },
  {
    fontIcon: faBook,
    title: 'Tajwid',
    navTitle: 'tajwid'

  },
  {
    fontIcon: faInfo,
    title: 'Informasi Aplikasi',
    navTitle: 'info-aplikasi'
  },
];

function FunNavigationArray( size: number, navigationProps?: any) {
  const {styles} = StyleMenuNav()
  return (
    <View>
      {navigateArray.map((item, index) => {
        return (
          <View key={index}>
            {item.navTitle ? 
            <Pressable style={styles.containerNav} onPress={() => navigationProps?.navigate(item.navTitle)}>
               <Text style={styles.textBox}>{item.title}</Text>
               <FontAwesomeIcon
                icon={item.fontIcon}
                color={'#ffff'}
                size={size}
                />
            </Pressable>
            :
              <View style={styles.containerNav} key={index}>
              <Text style={styles.textBox}>{item.title}</Text>
              {
                item.fun
              }
            </View>
              }
          </View>
        );
      })}
    </View>
  );
}

function MenuNavigation(props: propsMenuState) {
  const {styles} = StyleMenuNav();
  return (
    <View>
      <Animated.View style={[styles.animatedBox, { top: props.moveing }]}>
        <Pressable onPress={props.offPressHendler}>
          <FontAwesomeIcon
            icon={faClose}
            size={30}
            color={'#fff'}
            style={styles.iconStyle}
          />
        </Pressable>
        {FunNavigationArray( 23, props.navigation)}
      </Animated.View>
    </View>
  );
}
export default MenuNavigation;
