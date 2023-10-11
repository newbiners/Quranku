import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  GestureResponderEvent,
} from 'react-native';
import Animated from 'react-native-reanimated';
import {faClose, faBook, faInfo} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {useSelector} from 'react-redux';
import {RootState} from '../../redux/store/store';
import DarkModeIndicator from './darkModeIndicator';

type propsMenuState = {
  moveing?: any;
  offPressHendler?: (event: GestureResponderEvent) => void;
};

const navigateArray = [
  {
    fun: <DarkModeIndicator />,
    title: 'Dark Mode',
  },
  {
    fontIcon: faBook,
    title: 'Tajwid',
  },
  {
    fontIcon: faInfo,
    title: 'Informasi Aplikasi',
  },
];

function FunNavigationArray(color: string, size: number) {
  const styles = StyleSheet.create({
    constainers: {
      flexDirection: 'row',
      alignItems: 'center',
      margin: 8,
      justifyContent: 'space-between',
      marginHorizontal: 20,
    },
    textBox: {
      fontSize: 15,
      fontWeight: '600',
      marginRight: 8,
      color: '#fff',
    },
  });
  return (
    <View>
      {navigateArray.map((item, index) => {
        return (
          <View key={index} style={styles.constainers}>
            <Text style={styles.textBox}>{item.title}</Text>
            {item.fun ? (
              item.fun
            ) : (
              <FontAwesomeIcon
                icon={item.fontIcon}
                color={'#ffff'}
                size={size}
              />
            )}
          </View>
        );
      })}
    </View>
  );
}

function MenuNavigation(props: propsMenuState) {
  const Style = useSelector((state: RootState) => state.myStyle.value);
  const styles = StyleSheet.create({
    containers: {
      flex: 1,
      alignItems: 'center',
      zIndex: 999,
    },
    animatedBox: {
      height: 200,
      backgroundColor: Style.backgroundColor3,
      width: 200,
      borderRadius: 20,
      position: 'absolute',
      right: 4,
      zIndex: 999,
      elevation: 9,
      top: -260,
    },
    iconStyle: {
      margin: 10,
    },
  });

  return (
    <View>
      <Animated.View style={[styles.animatedBox, {top: props.moveing}]}>
        <Pressable onPress={props.offPressHendler}>
          <FontAwesomeIcon
            icon={faClose}
            size={30}
            color={'#fff'}
            style={styles.iconStyle}
          />
        </Pressable>
        {FunNavigationArray('#fff', 23)}
      </Animated.View>
    </View>
  );
}
export default MenuNavigation;
