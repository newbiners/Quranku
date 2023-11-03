import { View,Text } from "react-native"
interface IDetails {
number: string
ayat: string
translete : string,
urlAudio: string
}
import PlayAudioBoard from "./playAudioBoard"
import { useSelector } from "react-redux"
import { RootState } from "../reducers/redux/store/store"
export default function DetailSuratItem({number, ayat, translete, urlAudio}: IDetails) {
    const Style = useSelector((state: RootState) => state.myStyle.value);
    
    return (
        <View>
            {number !== "0" &&
                <View style={{marginBottom: 7}}>
                    <PlayAudioBoard
                    number={number}
                    urlAudio={urlAudio}
                    />
                </View>
            }
            <View style={{ marginBottom: number !== "0" ? 20 : 0}}>
                {number !== "0" ?
                    <Text style={{ fontSize: 30, fontWeight: "700", color: Style.colorText3 }}>{ayat}</Text>
                    :
                    <Text style={{ fontSize: 30, fontWeight: "700",color: Style.colorText3, textAlign: "center", marginTop: 10, marginBottom: 15  }}>۞ {ayat} ۞</Text>
                }
            </View>
            { number !== "0" &&
                <Text style={{ fontSize: 17,color: Style.colorText3, marginBottom: 30 }}>{translete}</Text>
            }
        </View>
    )
}
