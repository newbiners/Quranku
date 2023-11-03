import { StyleSheet,Dimensions } from "react-native";
import { useSelector } from "react-redux"; 
import { RootState } from "../reducers/redux/store/store";
const StyleBtnNavRect = () => {
    const Style = useSelector((state:RootState) => state.myStyle.value);
    const styles = StyleSheet.create({
        containers: {
            borderRadius: 20,
            padding: 10,
            position: 'relative',
            overflow: 'hidden',
            elevation: 10
        },
        iconBox: {
            height: 288,
            position: 'absolute',
            width: '130%',
            bottom: -50,
        },
        boxText1: {
            width: '60%',
        },
        text1: {
            fontSize: 35,
            fontWeight: "700"
        },
        text2 : {
            fontSize: 17
        },
        boxText2: {
            flexDirection: 'row',
            justifyContent: 'space-between',
        },
        iconStyle1: {
            backgroundColor: Style.backgroundColor2,
            color: Style.colorText2
        },
        iconStyle2: {
            backgroundColor: Style.backgroundColor2,
            color: Style.colorText1
        }
    });
    const active = Style.active
    return { styles, active}
}

export default StyleBtnNavRect;