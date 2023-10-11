import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {IconDefinition} from '@fortawesome/fontawesome-common-types';
import {useSelector} from 'react-redux';
import {RootState} from '../../redux/store/store';
type btnState = {
  icon: IconDefinition;
  size?: number;
  title?: string;
  color?: string;
  iconColor?: string;
};
function BtnNavigationCircle(props: btnState) {
  const Style = useSelector((state: RootState) => state.myStyle.value);
  const styles = StyleSheet.create({
    containers: {
      alignItems: 'center',
      marginHorizontal: 15,
    },
    boxIcon: {
      height: 80,
      width: 80,
      backgroundColor: 'green',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 16,
      borderRadius: 200,
      overflow: 'hidden',
    },
    textStyle: {
      fontSize: 13,
      fontWeight: '600',
      color: Style.colorText1,
    },
  });
  return (
    <View style={styles.containers}>
      <View style={[styles.boxIcon, {backgroundColor: props.color}]}>
        <FontAwesomeIcon
          icon={props.icon}
          size={props.size}
          color={props.iconColor}
        />
      </View>
      <Text style={styles.textStyle}>{props.title}</Text>
    </View>
  );
}

export default BtnNavigationCircle;
