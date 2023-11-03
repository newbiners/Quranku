import React from 'react';
import { useMemo, useEffect } from 'react';
import { View, FlatList } from 'react-native';
import AddFetchDataJuzController from '../reducers/viewControllers/addFetchDataJuz';
import { JuzItem } from '../components';
import Loading from '../commons/loading';
import { useSelector } from 'react-redux';
import { RootState } from '../reducers/redux/store/store';
function JuzScreen({navigation}: any) {
  const Style = useSelector((state: RootState) => state.myStyle.value);
  const {
    fetchDataJuzController,
    data,
    loading
  } = AddFetchDataJuzController()

  useEffect(() => {
    fetchDataJuzController();
  },[])

  const arrayData = useMemo(() => {
    return data
  }, [data])

  if(loading){
    return <Loading/>
  }
  return (
    <View style={{backgroundColor: Style.bgBox}}>
      <FlatList
        data={arrayData}
        keyExtractor={item => item.number}
        renderItem={({ item }) =>
          <JuzItem
            number={item.number}
            mulai_dari={item.mulai_dari}
            navigation={navigation}
          />
        }
        style={{ paddingTop: 10, marginBottom: 10, paddingHorizontal: 10 }}
      />
    </View>
  );
}

export default JuzScreen;
