import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faArrowRight} from '@fortawesome/free-solid-svg-icons';

interface StyleState {
  height?: number;
  bgColor?: string;
  text1?: string;
  text2?: string;
  color?: string;
  navigation?: StackNavigationProp<any> | any;
  icon?: any;
  titleNavigation?: string;
}

export default function BtnNavigationRectegle(props: StyleState) {
  const hendler = () => {
    props.navigation.navigate(props.titleNavigation);
  };
  return (
    <Pressable onPress={hendler}>
      <View
        style={[
          styles.containers,
          {
            height: props.height,
            backgroundColor: props.bgColor,
          },
        ]}>
        <View style={styles.iconBox}>{props.icon}</View>
        <View>
          <View style={styles.boxText1}>
            <Text style={[styles.text1, {color: props.color}]}>
              {props.text1}
            </Text>
          </View>
          <View style={styles.boxText2}>
            <Text style={{color: props.color}}>{props.text2}</Text>
            <FontAwesomeIcon
              icon={faArrowRight}
              size={20}
              color={props.color}
            />
          </View>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  containers: {
    borderRadius: 20,
    padding: 10,
    position: 'relative',
    overflow: 'hidden',
  },
  iconBox: {
    height: 188,
    position: 'absolute',
    width: '120%',
    bottom: 0,
  },
  boxText1: {
    width: '60%',
  },
  text1: {
    fontSize: 30,
  },
  boxText2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
