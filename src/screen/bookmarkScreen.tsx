import { View, FlatList } from "react-native"
import { BookmarkItem } from "../components";
import ChildHendle from "../commons/childHendle";
import { useEffect, useMemo } from "react";
import { BookmarkControllers } from "../reducers/viewControllers";
import StyleBookmark from "../styles/StyleBookmark";
const BookmarkScreen = ({ navigation }: any) => {
    const {styles} = StyleBookmark()
    const { fetchDataController, newTableController, data } = BookmarkControllers()
    useEffect(() => {
        fetchDataController();
    }, [])

    const dataArray = useMemo(() => {
        return data;
    }, [data])
   
    return (
        <View>
            <ChildHendle
             logo={true}
             titleHeader="Bookmark"
             navigation={navigation}
             menu="menuNav"
            >
            <FlatList
                data={dataArray}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                    <BookmarkItem
                        nama_latin={item.name_latian}
                        number={item.number}
                        name={item.name}
                        dataHendle={fetchDataController}
                    />
                )}
                style={{ marginHorizontal: 10, marginTop: 20}}
            />
            </ChildHendle>
        </View>
    )
}

export default BookmarkScreen;