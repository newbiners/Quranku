import { StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import { RootState } from "../reducers/redux/store/store";
const StyleTasbih = () => {
    const Style = useSelector((state: RootState) => state?.myStyle?.value);
    const styles = StyleSheet.create({
      numberBox: {
        height: "75%",
        alignItems: "center",
        justifyContent: "center" 
      },
      numberStyle: {
        fontSize: 150,
        color: Style.colorText3,
        fontWeight: "700" 
      },
      btnBox: {
        alignItems: "center",
        overflow: "hidden" 
      },
      btnStyle: {
        backgroundColor: Style.backgroundColor1,
        height: 90,
        width: 90,
        borderRadius: 100,
      },
      iconReset: {
        color: Style.backgroundColor1
      }
    })

    return { styles }
}


export default StyleTasbih;