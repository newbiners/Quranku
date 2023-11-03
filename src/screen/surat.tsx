import React from 'react';
import { View,SafeAreaView, FlatList} from 'react-native';
import { ItemSurat } from '../components';
import addFetchDataControllers from '../reducers/viewControllers/addFetchDataController';
import Loading from '../commons/loading';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../reducers/redux/store/store';
function Surat({navigation}: any) {
  const {data,loading,dataView} = addFetchDataControllers();
  const Style = useSelector((state: RootState) => state.myStyle.value);
  useEffect(() => {
    dataView();
  }, []);

  const dataArrays = React.useMemo(() => {
    return data;
  }, [data]);

  if (loading) {
    return <Loading />
  }
  return (
    <View style={{backgroundColor: Style.bgBox}}>
      <SafeAreaView>
        <FlatList 
          data={dataArrays}
          keyExtractor={item => item.id}
          renderItem={({ item }) => <ItemSurat
          navigation={navigation}
          key={item.id}
          number_of_ayah={item.number_of_ayah}
          nama_latin={item.name_latian}
          name={item.name}
          number={item.number}
          />}
          style={{paddingTop: 10, marginBottom: 10}}
        />
      </SafeAreaView>
    </View>
  );
}
export default Surat;
