import { StyleSheet } from "react-native"
import { useSelector } from "react-redux";
import { RootState } from "../reducers/redux/store/store";
const StyleMenuNav = () => {
    const Style = useSelector((state: RootState) => state.myStyle.value);
    const styles = StyleSheet.create({
        containers: {
          flex: 1,
          alignItems: 'center',
          zIndex: 999,
        },
        animatedBox: {
          height: 200,
          backgroundColor: Style.backgroundColor3,
          width: 200,
          borderRadius: 20,
          position: 'absolute',
          right: 4,
          zIndex: 999,
          elevation: 9,
          top: -260,
        },
        iconStyle: {
          margin: 10,
        },
        containerNav: {
            flexDirection: 'row',
            alignItems: 'center',
            margin: 8,
            justifyContent: 'space-between',
            marginHorizontal: 20,
          },
          textBox: {
            fontSize: 15,
            fontWeight: '600',
            marginRight: 8,
            color: '#fff',
          },
      });
      return {styles}
}

export default StyleMenuNav;