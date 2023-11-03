import { View, Text, FlatList } from 'react-native';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../reducers/redux/store/store';
const ListJuzDetail = ({ data, dataTrans }: any) => {
    const Style = useSelector((state: RootState) => state.myStyle.value);
    const dataArray = useMemo(() => {
        const text = data && Object.entries(data);
        const translete = dataTrans && Object.values(dataTrans)
        return { text, translete }
    }, [data])

    console.log(dataArray.translete)
    return (
        <View>
            <FlatList
                data={data && dataArray.text}
                keyExtractor={item => item[0]}
                renderItem={({ item, index }) => (
                    <View style={{ marginHorizontal: 10, flexDirection: "column", marginBottom: 30, borderBottomWidth: 1, borderBottomColor: Style.backgroundColor1, paddingBottom: 10 }}>
                        <View style={{ marginBottom: item[0] !== "0" ? 20 : 5 }}>
                            {item[0] !== "0" &&
                                <View style={{ backgroundColor: Style.backgroundColor1, width: 35, height: 35, borderRadius: 20, alignItems: "center", justifyContent: "center", padding: 2 }}>
                                    <Text style={{ color: Style.bgBox }}>{item[0]}</Text>
                                </View>
                            }
                            {item[0] == "0" ?
                            <Text style={{ fontSize: 30, fontWeight: "700", color: Style.colorText3, textAlign: "center" }}>۞ {item[1]} ۞</Text>
                            :
                           <Text style={{ fontSize: 30, fontWeight: "700", color: Style.colorText3 }}>{item[1]}</Text>
                            }
                        </View>
                        <Text style={{ fontSize: 20, color: Style.colorText3 }}>{dataTrans && dataArray?.translete[index]}</Text>
                    </View>
                )}
            />
        </View>
    )
}

export default ListJuzDetail;