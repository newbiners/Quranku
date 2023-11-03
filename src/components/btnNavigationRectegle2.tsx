import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { StyleBtnNavRect2 } from '../styles';
import { btnState } from '../interfaces/stateInterfaces';

function BtnNavigationRectegle2(props: btnState) {
  const {styles} = StyleBtnNavRect2(); 

  return (

    <View
      style={[
        { backgroundColor: props.bgColor, width: props.width, marginRight: props.index == 0 ? 15 : 0 },
        styles.containers,
      ]}>
      <Pressable style={{ alignItems: 'center',justifyContent: 'center'}} onPress={() => props.navigation?.navigate(props.navTitle!)}>
        <FontAwesomeIcon
          icon={props.icon}
          size={props.size}
          color={props.color}
        />
        <View style={styles.boxText}>
          <Text style={[styles.textStyle, { color: props.color }]}>
            {props.title}
          </Text>
        </View>
      </Pressable>
    </View>
  );
}

export default BtnNavigationRectegle2;
