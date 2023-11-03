import { View, Text, Pressable,ActivityIndicator } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPlay, faArrowLeft, faArrowRight, faPause } from '@fortawesome/free-solid-svg-icons';
import { StyleAudioQuran } from '../styles';
import { useState, useEffect } from 'react';
const PlayerAudioItem = ({ data, play, btnPlay, btnMovingAudio, btnStop, loading, numberAudio }: any) => {
    const { styles } = StyleAudioQuran();
    const [postifHend, setPositifHend] = useState()
    const [negatfeHend, setNegatifHend] = useState<any>()
    ////cek 
    useEffect(() => {
        setPositifHend(data.nomor + 1)
        setNegatifHend(data.nomor - 1)
    }, [data])

    return (
        <View style={styles.boxPlayers}>
            <View style={{ marginRight: 20 }}>
                <Text style={styles.styleNameLatin}>{data && data.namaLatin}</Text>
                <Text style={styles.styleName}>{data && data.jumlahAyat} Ayat</Text>
            </View>
            <View style={styles.boxIconPlayer}>
                <Pressable onPress={() => btnMovingAudio(data.nomor !== 1 ? negatfeHend : data.nomor)}>
                    <View style={styles.arrowStyle}>
                        <FontAwesomeIcon icon={faArrowLeft} size={30} color={styles.iconStyle.color} />
                    </View>
                </Pressable>
                {loading ?
                  <ActivityIndicator size="large" color="#ffff" /> :
                    <Pressable onPress={play ? () => btnStop() : () => btnPlay(data.audioFull[numberAudio], data)}>
                    <FontAwesomeIcon icon={play ? faPause : faPlay} size={50} color='#fff' />
                </Pressable>
                }
                <Pressable onPress={() => btnMovingAudio(postifHend)}>
                    <View style={styles.arrowStyle}>
                        <FontAwesomeIcon icon={faArrowRight} size={30} color={styles.iconStyle.color} />
                    </View>
                </Pressable>
            </View>
        </View>
    )
}


export default PlayerAudioItem;