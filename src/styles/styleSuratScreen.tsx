import { StyleSheet } from "react-native"
import {useSelector} from 'react-redux';
import {RootState} from '../reducers/redux/store/store';
const StyleSuratScreen = () => {
    const Style = useSelector((state: RootState) => state.myStyle.value);
    const styles = StyleSheet.create({
        boxHeader: {
          backgroundColor: Style.bgBox,
          zIndex: 999,
          paddingHorizontal: 10,
        }
      });

      const tabNavStyle = {
        tabBarStyle: {backgroundColor: Style.bgBox},
        tabBarLabelStyle: {color: Style.colorText1},
        tabBarItemStyle: {width: 100},
    }

      return {styles, tabNavStyle}
}

export default StyleSuratScreen