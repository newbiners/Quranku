import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {IconDefinition} from '@fortawesome/fontawesome-svg-core';
type btnState = {
  icon: IconDefinition;
  title?: string;
  bgColor?: string;
  color?: string;
  size?: number;
  width?: any;
};

function BtnNavigationRectegle2(props: btnState) {
  const styles = StyleSheet.create({
    containers: {
      height: 110,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 20,
      margin: 7,
      overflow: 'hidden',
    },
    boxText: {
      marginTop: 5,
      alignItems: 'center',
    },
    textStyle: {
      fontSize: 15,
      fontWeight: '700',
    },
  });

  return (
    <View
      style={[
        styles.containers,
        {backgroundColor: props.bgColor, width: props.width},
      ]}>
      <FontAwesomeIcon
        icon={props.icon}
        size={props.size}
        color={props.color}
      />
      <View style={styles.boxText}>
        <Text style={[styles.textStyle, {color: props.color}]}>
          {props.title}
        </Text>
      </View>
    </View>
  );
}

export default BtnNavigationRectegle2;
