import { StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import { RootState } from "../reducers/redux/store/store";
const StyleChildHendle = () => {
    const Style = useSelector((state: RootState) => state?.myStyle?.value);
    const styles = StyleSheet.create({
        containerBox: {
            paddingHorizontal: 10,
            zIndex: -10 ,
            backgroundColor: Style.bgBox,
            flex: 1
        },
        headerBox: {
            paddingHorizontal: 10,
            elevation: 10,
            paddingBottom: 5,
            zIndex: 999
        },
        containers: {
            backgroundColor: Style.bgBox,
            elevation: 10
        }
    })

    return { styles }
}


export default StyleChildHendle;