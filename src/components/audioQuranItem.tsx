import { View, Text, Pressable, ActivityIndicator } from 'react-native';
import { StyleAudioQuran } from '../styles';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons';
const AudioQuranItem = ({ item, btnPlay, play, btnStop, loading, numberAudio }: any) => {
    const { styles } = StyleAudioQuran();
    return (
        <View style={styles.listPlayer}>
            <View style={{ flexDirection: "column" }}>
                <Text style={styles.namaLatinItem}>{item && item.namaLatin}</Text>
                <Text style={styles.namaItem}>{item && item.nama}</Text>
            </View>
            <View>
                {loading ? 
                  <ActivityIndicator size="large" color="#ffff" /> :
                    <Pressable onPress={play ? () => btnStop() : () => btnPlay(item && item.audioFull[numberAudio], item && item)}>
                        <FontAwesomeIcon icon={play ? faPause : faPlay} size={30} color={styles.arrowStyle.color} />
                    </Pressable>
                }
            </View>
        </View>
    )
}


export default AudioQuranItem;