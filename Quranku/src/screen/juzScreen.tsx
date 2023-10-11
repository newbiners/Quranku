import React from 'react';
import {View, Text, Pressable} from 'react-native';
import addFetchDataControllers from '../reducers/viewControllers/addFetchDataController';
function JuzScreen() {
  const {cekdata} = addFetchDataControllers();
  return (
    <View>
      <Pressable onPress={cekdata}>
        <Text>text juz</Text>
      </Pressable>
    </View>
  );
}

export default JuzScreen;
