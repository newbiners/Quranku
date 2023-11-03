import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { IBtnNav } from '../interfaces/stateInterfaces';
import StyleBtnNavRect from '../styles/StyleBtnNavRect';
import { MasjidLightMod1, MasjidLightMod2, MasjidDarkMod1, MasjidDarkMod2 } from '../assets';
export default function BtnNavigationRectegle(props: IBtnNav) {
  const {styles,active} = StyleBtnNavRect();
  const hendler = () => {
    props.navigation!.navigate(props.titleNavigation!);
  };

  const Colors = {
    navBtnStyle1: {height: 140, backgroundColor: styles.iconStyle1.backgroundColor, color: styles.iconStyle1.color},
    navBtnStyle2: {height: 110, backgroundColor: styles.iconStyle2.backgroundColor, color: styles.iconStyle2.color},
  }
  const KeyColor= props.type as keyof typeof Colors;

  const IconActive = {
    navBtnStyle1: [<MasjidLightMod1 height={'100%'} />, <MasjidDarkMod1 height={'100%'} />],
    navBtnStyle2: [<MasjidLightMod2 height={'100%'} />, <MasjidDarkMod2 height={'100%'} />]
  }
  const KeyIcon= props.type as keyof typeof IconActive;
  return (
    <Pressable onPress={hendler}>
      <View
        style={[
          Colors[KeyColor],
          styles.containers,
        ]}>
        <View style={styles.iconBox}>{active === 'light' ? IconActive[KeyIcon][0] : IconActive[KeyIcon][1]}</View>
        <View>
          <View style={styles.boxText1}>
            <Text style={[styles.text1, { color: Colors[KeyColor].color }]}>
              {props.text1}
            </Text>
          </View>
          <View style={styles.boxText2}>
            <Text style={[styles.text2,{ color: Colors[KeyColor].color }]}>{props.text2}</Text>
            <FontAwesomeIcon
              icon={faArrowRight}
              size={20}
              color={Colors[KeyColor].color}
            />
          </View>
        </View>
      </View>
    </Pressable>
  );
}