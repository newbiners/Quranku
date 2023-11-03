import { StyleSheet } from "react-native"
import { useSelector } from 'react-redux';
import { RootState } from '../reducers/redux/store/store';
const StyleSuratItem = () => {
    const Style = useSelector((state: RootState) => state.myStyle.value);
    const styles = StyleSheet.create({
        containers: {
          backgroundColor: Style.backgroundColor1,
          marginBottom: 10,
          marginHorizontal: 6,
          borderRadius: 10,
          height: 70,
          padding: 9,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        },
        containerNumberNameTitle: {
            flexDirection: 'row',
            alignItems: 'center' 
        },
        boxNumber: {
            backgroundColor: Style.backgroundColor2,
            height: 35,
            width: 35,
            alignItems: "center",
            justifyContent: "center", 
            borderRadius: 20 
        },
        boxnameLatin: {
            marginLeft: 20
        },
        numberStyle: {
            color: Style.backgroundColor1,
            fontSize: 13
        },
        namaLatinStyle : {
            fontSize: 17,
            fontWeight: "700",
            color: Style.bgBox
        },
        ayatStyle: {
            color: Style.bgBox 
        },
        nameStyle : {
            fontSize: 20,
            fontWeight: '900',
            color: Style.bgBox 
        }
    });

    return {styles}
}


export default StyleSuratItem;
