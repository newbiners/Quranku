import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import addFetchDataControllers from '../reducers/viewControllers/addFetchDataController';
import {
  BtnNavigationRectegle,
  Header,
  BtnNavigationCircle,
  BtnNavigationRectegle2,
} from '../components';
import {
  faGear,
  faMosque,
  faCalendar,
  faPray,
  faListCheck,
  faEarListen,
} from '@fortawesome/free-solid-svg-icons';
import MasjitLightMod2 from '../assets/masjit-lightmod2.svg';
import MasjitLightMod from '../assets/masjit-lightmod.svg';
import MasjitDarkMod from '../assets/masjit-darkmod.svg';
import MasjitDarkMod2 from '../assets/masjit-darkmod2.svg';
import {useSelector} from 'react-redux';
import {RootState} from '../reducers/redux/store/store';

export default function Home({navigation}: any) {
  const {cekdata,data,dataView} = addFetchDataControllers()
  const Style = useSelector((state: RootState) => state.myStyle.value);
  const arrayFiture = [
    {
      icon: faCalendar,
      title: 'Calender',
    },
    {
      icon: faMosque,
      title: 'Jatwal Sholat',
    },
    {
      icon: faPray,
      title: 'Tasbih',
    },
  ];
  const arrayMenu = [
    {
      icon: faListCheck,
      title: 'To Do List',
      bgColor: Style.backgroundColor1,
      width: '52%',
      color: '#ffff',
    },
    {
      icon: faEarListen,
      title: 'Audio Quran',
      bgColor: Style.backgroundColor2,
      width: '40%',
      color: '#fff',
    },
  ];

  const iconActiveTwo =
    Style.active === 'light' ? (
      <MasjitLightMod2 height={'100%'} />
    ) : (
      <MasjitDarkMod2 height={'100%'} />
    );
  const iconActive =
    Style.active === 'light' ? (
      <MasjitLightMod height={'100%'} />
    ) : (
      <MasjitDarkMod height={'100%'} />
    );
  console.log(data)
  return (
    <View style={[{backgroundColor: Style.bgBox}, styles.containerBox]}> 
      <View style={styles.contaners}>
        <Header titleHeader="Quranku" iconFontAwesome={faGear} logo={false} />
        <ScrollView>
          <View style={styles.menuBox}>
            <BtnNavigationRectegle
              icon={iconActive}
              height={140}
              bgColor={Style.backgroundColor2}
              color={'#fff'}
              text1={'Baca AL-Quran'}
              text2={'Al-Fatihah'}
              navigation={navigation}
              titleNavigation="surat"
            />
          </View>
          <View>
            <Text style={[styles.textStyle, {color: Style.colorText1}]}>
              Fiture
            </Text>
          </View>
          <View style={styles.boxFiture}>
            {arrayFiture.map((item, index) => (
              <BtnNavigationCircle
                key={index}
                icon={item.icon}
                title={item.title}
                size={35}
                color={Style.backgroundColor4}
                iconColor={Style.iconColor}
              />
            ))}
          </View>
          <View style={styles.navigationRectegle2}>
            <BtnNavigationRectegle
              icon={iconActiveTwo}
              height={110}
              bgColor={Style.backgroundColor2}
              color={Style.backgroundColor1}
              text1={'Bookmark'}
              text2={'Al-Baqarah'}
            />
          </View>
          <View style={styles.navigationRectegle}>
            {arrayMenu.map((item, index) => (
              <BtnNavigationRectegle2
                icon={item.icon}
                title={item.title}
                bgColor={item.bgColor}
                width={item.width}
                size={30}
                color={item.color}
                key={index}
              />
            ))}
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  contaners: {
    marginHorizontal: 10,
  },
  menuBox: {
    marginTop: 50,
  },
  textStyle: {
    fontSize: 23,
    fontWeight: '600',
    marginTop: 20,
    letterSpacing: 2,
  },
  boxFiture: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  containerBox: {
    flex: 1,
  },
  navigationRectegle: {
    flexDirection: 'row',
  },
  navigationRectegle2: {
    marginTop: 30,
  },
});
