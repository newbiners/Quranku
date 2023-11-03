import { View, Text, FlatList,Pressable } from "react-native";
import { useEffect, useMemo, memo } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../reducers/redux/store/store";
import AddFetchDataJuzController from "../reducers/viewControllers/addFetchDataJuz"
function Juz(props: {id: any, setId: any, btnToTop?:any}) {
    const Style = useSelector((stete:RootState) => stete.myStyle.value);
    const { fetchDataJuzController, data } = AddFetchDataJuzController();
    useEffect(() => {
        fetchDataJuzController()
    }, [])

    const dataArray = useMemo(() => {
        return data
    }, [data])

    const btnHendler = (number : String) => {
        props.setId(number)
        props?.btnToTop();
    }
    return (
        <View>
            <FlatList
            data={dataArray}
            keyExtractor={item => item.number}
            renderItem={({item}) => (
                <Pressable onPress={()=>btnHendler(item.number)}>
                <View style={{margin: 10, paddingHorizontal: 25, paddingVertical: 10, backgroundColor: (props.id == item.number ? Style.backgroundColor1 :Style.backgroundColor2), borderRadius: 20}}>
                    <Text style={{fontSize: 15, color: Style.colorText2}}>Juz {item.number}</Text>
                </View>
                </Pressable>
            )}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            />
        </View>
    )
}

const ListJuz = memo(Juz);
export default ListJuz;
