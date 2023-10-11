import React from 'react';
import {View, Text, StyleSheet, ViewToken} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState} from '../reducers/redux/store/store';
import Animated, { useAnimatedStyle, withTiming } from 'react-native-reanimated';
import { SharedValue } from 'react-native-reanimated';
interface IItemSurat {
  number_of_ayah: string;
  name: string;
  number: string;
  nama_latin: string;
  viewableItems: SharedValue<ViewToken[]>
}

export default function ItemSurat({
  number_of_ayah,
  name,
  number,
  nama_latin,
  viewableItems,
}: IItemSurat): React.ReactElement {
  const Style = useSelector((state: RootState) => state.myStyle.value);
  const styles = StyleSheet.create({
    containers: {
      backgroundColor: Style.backgroundColor1,
      marginBottom: 10,
      marginHorizontal: 6,
      borderRadius: 10,
      height: 70,
      padding: 9,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
  });

  const rStyle = useAnimatedStyle(() => {
    const iVisible = Boolean(viewableItems.value.filter((item) => item.isViewable).find((viewableItem) => viewableItem.item.number === number))
  return{
    opacity: withTiming(iVisible ? 1 : 0),
    transform: [
      {
        scale: withTiming(iVisible ? 1 : 0.4)
      }
    ]
  }
  })
  return (
    <Animated.View style={[styles.containers,rStyle]}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <View style={{backgroundColor: Style.backgroundColor2, height: 35, width: 35, alignItems: "center", justifyContent: "center", borderRadius: 20}}>
          <Text style={{color: Style.backgroundColor1}}>{number}</Text>
        </View>
        <View style={{marginLeft: 20}}>
          <Text style={{fontSize: 17, fontWeight: "700", color: "#fff"}}>{nama_latin}</Text>
          <Text>{number_of_ayah} ayat</Text>
        </View>
      </View>
      <Text style={{fontSize: 20, fontWeight: '900', color: "#fff"}}>{name}</Text>
    </Animated.View>
  );
}
