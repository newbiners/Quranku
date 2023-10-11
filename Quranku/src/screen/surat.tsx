/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { View, ScrollView, SafeAreaView, FlatList,ViewToken,Button } from 'react-native';
import { ItemSurat } from '../components';
import addFetchDataControllers from '../reducers/viewControllers/addFetchDataController';
import Loading from '../commons/loading';
import { useEffect } from 'react';
import { useSharedValue } from 'react-native-reanimated';
interface ISurat {
  id: number;
  name: string;
  name_latian: string;
  number: string;
  number_of_ayah: string;
  text: object;
  translations: object;
}

function Surat() {
  const viewableItems = useSharedValue<ViewToken[]>([])
  const {data,loading,dataViewNameSurat } = addFetchDataControllers()

  useEffect(() => {
    dataViewNameSurat()
  }, [])
  const dataArrays = React.useMemo(() => {
    return data;
  }, [data]);

  if (loading) {
    return <Loading />
  }
  const onViewCallBack = ({viewableItems : vItem}: any) => {
  viewableItems.value = vItem;
}
  return (
    <View>
      <SafeAreaView>
        <FlatList
         
          data={dataArrays}
          keyExtractor={item => item.id}
          renderItem={({ item }) => <ItemSurat
          key={item.id}
          number_of_ayah={item.number_of_ayah}
          nama_latin={item.name_latian}
          name={item.name}
          number={item.number}
          viewableItems={viewableItems}
          />}
          onViewableItemsChanged={onViewCallBack}
          style={{paddingTop: 10, marginBottom: 10}}
        />
      </SafeAreaView>
    </View>
  );
}
export default Surat;
