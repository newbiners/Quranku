import { View, Text, Pressable } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faPlay, faPause } from "@fortawesome/free-solid-svg-icons";
import AudioQuran from "../reducers/viewControllers/audioQuran";
import { useSelector } from "react-redux";
import { RootState } from "../reducers/redux/store/store";
interface IPlay {
    number: string;
    urlAudio: string
}

export default function PlayAudioBoard({ number, urlAudio }: IPlay): React.ReactElement {
    const { play, playAudio, stopAudio } = AudioQuran();
    const Style = useSelector((state: RootState) => state.myStyle.value);
    return (
        <View style={{ backgroundColor: Style.backgroundColor1, flexDirection: "row", justifyContent: "space-between", alignItems: "center", padding: 7, borderRadius: 10, marginBottom: 10 }}>
            <View style={{ backgroundColor: Style.backgroundColor3, height: 30, width: 30, borderRadius: 30, alignItems: "center", justifyContent: "center" }}>
                <Text style={{ fontSize: 20 }}>{number}</Text>
            </View>
            <Pressable onPress={!play ? () => playAudio(urlAudio) : stopAudio}>
                <FontAwesomeIcon icon={play ? faPause : faPlay} size={30} color="#fff" />
            </Pressable>
        </View>
    )
}
