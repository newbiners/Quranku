import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { useSelector } from 'react-redux';
import { RootState } from '../reducers/redux/store/store';
import { LogoDarkMod, LogoLightMod } from '../assets';
import { faGear, faBookmark,faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import MenuNavigation from './menuNavigation';
import { NavigationControllers, BookmarkControllers } from '../reducers/viewControllers';
import StyleHeader from '../styles/StyleHeader';
import { HeaderState } from '../interfaces/stateInterfaces';
import { useEffect } from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
const CheckIcon = (logo: boolean, navigation: StackNavigationProp<any>, color: string) => {
  const Style = useSelector((state: RootState) => state.myStyle.value);
  if (logo === true) {
    return (
      <Pressable onPress={() => navigation?.goBack()}>
        <FontAwesomeIcon icon={faArrowLeft} size={40} color={color} />
      </Pressable>
    );
  } else {
    return Style.active === 'light' ? (
      <LogoLightMod height={40} width={40} />
    ) : (
      <LogoDarkMod height={40} width={40} />
    );
  }
};

export default function Header(props: HeaderState) {
  const { styles } = StyleHeader();
  const { MenuNavigate, widthMove } = NavigationControllers()
  const { AddBookmarkController, fetchDataByIdController, isNav, deleteDataByIdController } = BookmarkControllers()
  const Menus = {
    menuNav:
      MenuNavigate,
    bookmarkNav:
    isNav === true ?
      () => deleteDataByIdController(props?.data?.number) :
      () => AddBookmarkController(props?.data)
  }
  const KeyMenu = props.menu as keyof typeof Menus;
  {
    props?.data &&
    useEffect(() => {
      fetchDataByIdController(props?.data?.number)
    }, [props?.data?.number])
  }

  {
    props.data && console.log(props.data)
  }
  return (
    <View>
      <MenuNavigation moveing={widthMove} navigation={props.navigation} offPressHendler={MenuNavigate} />
      <View style={styles.container}>
        <View>
          {typeof props.logo === 'boolean' &&
            CheckIcon(props.logo, props.navigation!, styles.iconColor.color)}
        </View>
        <Text style={styles.textStyle}>{props.titleHeader}</Text>
        <View>
          <Pressable onPress={Menus[KeyMenu]}>
            <FontAwesomeIcon
              icon={props.menu != 'bookmarkNav' ? faGear : faBookmark}
              size={30}
              color={props.menu === 'menuNav' ? styles.iconColor.color:
                isNav === true ? styles.iconColor.color : 'grey'}
            />
          </Pressable>
        </View>
      </View>
    </View>
  );
}
