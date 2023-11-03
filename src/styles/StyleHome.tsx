import { StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import { RootState } from "../reducers/redux/store/store";
const StyleHome = () => {
    const Style = useSelector((state: RootState) => state.myStyle.value);
    const styles = StyleSheet.create({
        contaners: {
          marginHorizontal: 10,
          flex: 1
        },
        menuBox: {
          marginTop: 80,
        },
        textStyle: {
          fontSize: 30,
          fontWeight: '700',
          marginTop: 20,
          letterSpacing: 2,
          color: Style.colorText1
        },
        boxFiture: {
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 20,
        },
        containerBox: {
          display: "flex",
          flex: 1,
          backgroundColor: Style.bgBox
        },
        navigationRectegle: {
          flexDirection: 'row',
          marginTop: 20
        },
        navigationRectegle2: {
          marginTop: 10,
        },
      });

      return{styles}
}

export default StyleHome;