import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {useSelector} from 'react-redux';
// import {RootState} from '../../redux/store/store';
import { RootState } from '../reducers/redux/store/store';
// import Logo from '../../assets/logo.svg';
import Logo from '../assets/logo.svg';
import LogoDark from '../assets/logoDark.svg';
import {IconProp} from '@fortawesome/fontawesome-svg-core';
import {useState} from 'react';
import {useSharedValue, withSpring} from 'react-native-reanimated';
import MenuNavigation from './menuNavigation';
type HeaderState = {
  logo?: boolean | false;
  iconLogo?: IconProp | any;
  titleHeader: string;
  iconFontAwesome?: IconProp | any;
  pressHandler?: () => void;
};

const CheckIcon = (logo: boolean, iconLogo: IconProp) => {
  const Style = useSelector((state: RootState) => state.myStyle.value);
  if (logo === true) {
    return (
      <FontAwesomeIcon icon={iconLogo} size={40} color={Style.colorText1} />
    );
  } else {
    return Style.active === 'light' ? (
      <Logo height={40} width={40} />
    ) : (
      <LogoDark height={40} width={40} />
    );
  }
};

export default function Header(props: HeaderState) {
  const Style = useSelector((state: RootState) => state.myStyle.value);

  const styles = StyleSheet.create({
    container: {
      height: 40,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    textStyle: {
      fontSize: 25,
      fontWeight: '700',
      letterSpacing: 2,
      color: Style.colorText1,
    },
  });

  const [isIndicator, setIsIndicator] = useState<boolean>(false);
  const widthMove = useSharedValue(-260);
  const handlePress = () => {
    if (isIndicator === false) {
      widthMove.value = withSpring(10);
      setIsIndicator(true);
    } else {
      widthMove.value = withSpring(-260);
      setIsIndicator(false);
    }
  };

  return (
    <View>
      <MenuNavigation moveing={widthMove} offPressHendler={handlePress} />
      <View style={styles.container}>
        <View>
          {typeof props.logo === 'boolean' &&
            CheckIcon(props.logo, props.iconLogo)}
        </View>
        <Text style={styles.textStyle}>{props.titleHeader}</Text>
        <View>
          <Pressable onPress={handlePress}>
            <FontAwesomeIcon
              icon={props.iconFontAwesome}
              size={30}
              color={Style.colorText1}
            />
          </Pressable>
        </View>
      </View>
    </View>
  );
}
