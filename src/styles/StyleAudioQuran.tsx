import { StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import { RootState } from "../reducers/redux/store/store";
const StyleAudioQuran = () => {
    const Style = useSelector((state: RootState) => state.myStyle.value);
    const styles = StyleSheet.create({
        containers: {},
        boxPlayers: {
            backgroundColor: Style.backgroundColor1,
            flexDirection: "row",
            height: 100,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 16 
        },
        styleNameLatin: {
            fontSize: 30,
            fontWeight: "700",
            color: "#fff" 
        },
        styleName : {
            fontSize: 20,
            color: "#fff" 
        },
        boxIconPlayer: {
            flexDirection: "row",
            alignItems: "center",
            gap: 8 
        },
        arrowStyle: {
            backgroundColor: '#fff',
            padding: 10,
            borderRadius: 100,
            color: Style.bgBox
        },
        boxImage: {
            flexDirection: "row",
            alignItems: "center" 
        },
        imageBox: {
            alignItems: "center",
            marginHorizontal: 15 
        },
        boxImageStyle: {
            borderRadius: 100,
            overflow: "hidden"
        },
        listPlayerBox: {
            marginTop: 30,
            backgroundColor: Style.backgroundColor4,
            borderTopLeftRadius: 25,
            borderTopRightRadius: 25,
            paddingHorizontal: 10,
            overflow: "hidden",
            elevation: 10,
            marginBottom: 100,
            // height: 780
        },
        listPlayer : {
            flexDirection: "row",
            justifyContent: "space-between",
            paddingHorizontal: 10,
            backgroundColor: Style.backgroundColor1,
            marginVertical: 5,
            paddingVertical: 10,
            alignItems: "center",
            borderRadius: 10
        },
        namaLatinItem: {
            fontSize: 20,
            color: "#fff",
            fontWeight: "700"
        },
        namaItem: {
            fontSize: 15,
            color: "#fff",
            textAlign: "left"
        },
        iconStyle : {
            color: Style.backgroundColor1
        }
    })

    return {styles}
}


export default StyleAudioQuran;