import React from 'react';
import { View, Text } from 'react-native';
import {
  BtnNavigationRectegle,
  Header,
  BtnNavigationRectegle2,
} from '../components';
import {
  faPray,
  faEarListen,
} from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';
import { RootState } from '../reducers/redux/store/store';
import StyleHome from '../styles/StyleHome';
export default function Home({ navigation } : any) {
  const { styles } = StyleHome()
  const Style = useSelector((state: RootState) => state.myStyle.value);
  const arrayMenu = [
    {
      icon: faPray,
      title: 'Tasbih',
      bgColor: Style.backgroundColor1,
      width: '52%',
      color: '#fff',
      keyNav: "tasbih"
    },
    {
      icon: faEarListen,
      title: 'Audio Quran',
      bgColor: Style.backgroundColor2,
      width: '43%',
      color: '#fff',
      keyNav: 'audio-quran'
    },
  ];
  return (
    <View style={styles.containerBox}>
      <View style={styles.contaners}>
        <Header titleHeader="Quranku" logo={false} menu='menuNav' navigation={navigation} />
          <View style={styles.menuBox}>
            <BtnNavigationRectegle
              text1={'Baca AL-Quran'}
              text2={'Al-Fatihah'}
              navigation={navigation}
              titleNavigation="surat"
              type='navBtnStyle1'
            />
          </View>
          <View>
            <Text style={styles.textStyle}>
              Fiture
            </Text>
          </View>
          <View style={styles.navigationRectegle2}>
            <BtnNavigationRectegle
              text1={'Bookmark'}
              text2={'Al-Baqarah'}
              type='navBtnStyle2'
              navigation={navigation}
              titleNavigation="bookmark"
            />
          </View>
          <View style={styles.navigationRectegle}>
            {arrayMenu.map((item, index) => (
                <BtnNavigationRectegle2
                  icon={item.icon}
                  title={item.title}
                  bgColor={item.bgColor}
                  width={item.width}
                  size={25}
                  color={item.color}
                  key={index}
                  index={index}
                  navigation={navigation}
                  navTitle={item.keyNav}
                />
            ))}
          </View>
      </View>
    </View>
  );
}

