import { Text, View, Pressable } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import StyleBookmark from "../styles/StyleBookmark";
import { BookmarkControllers } from "../reducers/viewControllers";
interface IBookmark {
    number: string;
    nama_latin: string;
    name: string;
    dataHendle: () => any;
}
const BookmarkItem = ({ number, nama_latin, name, dataHendle }: IBookmark) => {
    const { deleteDataByIdController} = BookmarkControllers();
    const { styles } = StyleBookmark();
    const BtnBookmarkHendle = async(number: string) => {
        await deleteDataByIdController(number)
        await dataHendle()
    }
    return (
        <View style={styles.container}>
            <View style={styles.boxSurah}>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <View style={styles.boxNumber}>
                        <Text style={{ fontSize: 16, color: "#fff" }}>{number}</Text>
                    </View>
                    <Text style={{ fontSize: 27, fontWeight: "700", color: "#fff" }}>{nama_latin}</Text>
                </View>
                <Text style={{ fontSize: 36, fontWeight: "700", color: "#fff" }}>{name}</Text>
            </View>
            <View style={{ margin: 5, alignItems: "flex-end" }}>
                <Pressable onPress={() => BtnBookmarkHendle(number)}>
                    <View style={{ backgroundColor: "red", padding: 7, borderRadius: 5 }}>
                        <FontAwesomeIcon
                            icon={faTrash}
                            color="#fff"
                            size={26}
                        />
                    </View>
                </Pressable>
            </View>
        </View>
    )
};

export default BookmarkItem;