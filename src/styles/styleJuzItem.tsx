import { StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import { RootState } from "../reducers/redux/store/store";
const StyleJuzItem = () => {
    const Style = useSelector((state: RootState) => state.myStyle.value);
    const styles = StyleSheet.create({
        conatainer: {
            height: 70,
            backgroundColor: Style.backgroundColor1,
            marginBottom: 10,
            borderRadius: 10,
            padding: 7,
            flexDirection: "row",
            alignItems: "center"
        },
        boxNumber : {
            backgroundColor: Style.backgroundColor2,
            height: 35,
            width: 35,
            borderRadius: 100,
            alignItems: "center",
            justifyContent: "center",
            marginRight: 20
        },
        titleStyle : {
            fontSize: 22,
            fontWeight: "700",
            color: Style.bgBox
        },
        descStyle : {
            color: Style.bgBox,
            fontSize: 14
        },
        textStyle :{
            color: Style.backgroundColor1
        }
    })
    return {styles}
}

export default StyleJuzItem;