import { View, Text,FlatList,Pressable} from "react-native";
import { useEffect, useMemo,memo} from "react";
import addFetchDataControllers from "../reducers/viewControllers/addFetchDataController"
import { useSelector } from "react-redux";
import { RootState } from "../reducers/redux/store/store";
function Surah(props: { setId:any, id: any,btnToTop: any }) {
    const { dataView, data } = addFetchDataControllers();
    const Style = useSelector((state: RootState) => state.myStyle.value);
    useEffect(() => {
        dataView();
    }, [])
    const dataArray = useMemo(() => {
        return data
    },[data])
   
    const idHendle = (idNumber: String) => {
        props.setId(idNumber)
        props.btnToTop()
    }
    return (
        <View>
            <FlatList
            data={dataArray}
            keyExtractor={item => item.number}
            renderItem={({item}) => (
                <Pressable onPress={() =>idHendle(item.number)}>
                <View style={{marginHorizontal: 10, padding: 10, backgroundColor:(props.id === item.number ? Style.backgroundColor1 :Style.backgroundColor2), borderRadius: 20, marginVertical: 10}}>
                    <Text style={{color:  Style.colorText2}}>{item.name_latian}</Text>
                </View>
                </Pressable>
            )}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            />
        </View>
    )
}

const ListSurah = memo(Surah);
export default ListSurah;