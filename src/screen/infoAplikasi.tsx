import { View, Text, TouchableOpacity } from "react-native"
import ChildHendle from "../commons/childHendle";
import Clipboard from "@react-native-clipboard/clipboard";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCopy } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import { RootState } from "../reducers/redux/store/store";
const InfoAplikasi = ({ navigation }: any) => {
   const Style = useSelector((state: RootState) => state.myStyle.value);
    return (
        <ChildHendle
            logo={true}
            titleHeader="Infomasi Aplikasi"
            navigation={navigation}
            menu="menuNav"
        >
            <View>
                <Text style={{ fontSize: 25, fontWeight: "700", textAlign: "center", marginBottom: 5, marginTop: 10,color: Style.colorText3 }}>السلام عليكم ورحمة الله وبركاته</Text>
                <Text style={{ fontSize: 20, textAlign: "center",color: Style.colorText3 }}>This is a Quran application developed using TypeScript with the React Native framework. I created this application as a personal project. I utilize SQLite to store Quranic data, and for the audio, I fetch it from the equran.id website. Additionally, I also make use of free icons from FontAwesome.</Text>
                <View style={{ marginTop: 30,flexDirection: "row", gap: 20, alignItems: "center", justifyContent: "center"   }}>
                    <View style={{ flexDirection: "row", gap: 5, alignItems: "center"}}>
                        <Text style={{ fontSize: 20,color: Style.colorText3 }}>Audio Al-Quran</Text>
                        <TouchableOpacity onPress={() => Clipboard.setString('https://equran.id/apidev')}>
                            <FontAwesomeIcon icon={faCopy} size={20} color={Style.colorText3} />
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: "row", gap: 5, alignItems: "center" }}>
                        <Text style={{ fontSize: 20,color: Style.colorText3 }}>fontawesome</Text>
                        <TouchableOpacity onPress={() => Clipboard.setString('https://fontawesome.com/')}>
                            <FontAwesomeIcon icon={faCopy} size={20} color={Style.colorText3}/>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{marginTop: 20}}>
                    <Text style={{ fontSize: 20,color: Style.colorText3 }}>Email : </Text>
                    <View style={{ flexDirection: "row", gap: 5, alignItems: "center" }}>
                        <Text style={{color: Style.colorText3}}>gufronnewbiners@gmail.com</Text>
                        <TouchableOpacity onPress={() => Clipboard.setString('gufronnewbiners@gmail.com')}>
                            <FontAwesomeIcon icon={faCopy} size={20} color={Style.colorText3} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{marginTop: 20}}>
                    <Text style={{ fontSize: 20,color: Style.colorText3 }}>Github : </Text>
                    <View style={{ flexDirection: "row", gap: 5, alignItems: "center" }}>
                        <Text style={{color: Style.colorText3}}>https://github.com/newbiners</Text>
                        <TouchableOpacity onPress={() => Clipboard.setString('https://github.com/newbiners')}>
                            <FontAwesomeIcon icon={faCopy} size={20} color={Style.colorText3}/>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </ChildHendle>
    )
}

export default InfoAplikasi;