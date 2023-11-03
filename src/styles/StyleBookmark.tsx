import { StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import { RootState } from "../reducers/redux/store/store";
const StyleBookmark = () => {
    const Style = useSelector((state:RootState) => state.myStyle.value);

    const styles = StyleSheet.create({
        container: {
            backgroundColor: Style.backgroundColor1,
            marginBottom: 20,
            padding: 8,
            borderRadius: 15 
        },
        boxSurah: {
            borderBottomWidth: 1,
            borderBottomColor: Style.backgroundColor4
        },
        boxNumber: {
            backgroundColor:Style.backgroundColor2,
            height: 40,
            width: 40,
            alignItems: "center",
            justifyContent: "center",
            marginRight: 10,
            borderRadius: 20 
        },
        heanderContainer: {
            paddingHorizontal: 15,
            marginBottom: 19,
            elevation: 10,
            zIndex: 999,
            backgroundColor: Style.bgBox,
            paddingBottom: 20
        }
    })

    return{styles}
}

export default StyleBookmark;