import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { StyleSuratItem } from '../styles';
import { IItemSurat } from '../interfaces/stateInterfaces';

export default function ItemSurat({
  number_of_ayah,
  name,
  number,
  nama_latin,
  navigation
}: IItemSurat): React.ReactElement {
const {styles} = StyleSuratItem()
  return (
    <Pressable onPress={() => navigation.navigate("detail-surat", {id: number})}>
      <View style={styles.containers}>
        <View style={styles.containerNumberNameTitle}>
          <View style={styles.boxNumber}>
            <Text style={styles.numberStyle}>{number}</Text>
          </View>
          <View style={styles.boxnameLatin}>
            <Text style={styles.namaLatinStyle}>{nama_latin}</Text>
            <Text style={styles.ayatStyle}>{number_of_ayah} ayat</Text>
          </View>
        </View>
        <Text style={styles.nameStyle}>{name}</Text>
      </View>
    </Pressable>
  );
}
