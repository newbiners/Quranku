import { StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import { RootState } from "../reducers/redux/store/store";
export default function StyleHeader(){
    const Style = useSelector((state: RootState) => state.myStyle.value);
    const styles = StyleSheet.create({
        container: {
          height: 40,
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        },
        textStyle: {
          fontSize: 25,
          fontWeight: '700',
          letterSpacing: 2,
          color: Style.colorText1,
        },
        iconColor: {
        color: Style.colorText1
        }
      });

    return {styles}
}

// export default StyleHeader;
