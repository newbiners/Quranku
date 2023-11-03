import { View, Text, FlatList, Image, Pressable, ScrollView } from 'react-native';
import ChildHendle from '../commons/childHendle';
import { AudioQuran } from '../reducers/viewControllers';
import { useEffect, useMemo } from 'react';
import { StyleAudioQuran } from '../styles';
import AudioQuranItem from '../components/audioQuranItem';
import PlayerAudioItem from '../components/playerAudioItem';
const arraysImage = [
    {
        id: "01",
        image: require("../assets/image/Abdul-Rahman-Al-Sudais.jpg")
    },
    {
        id: "02",
        image: require("../assets/image/abdulmohsen-al-qasim.jpg")
    },
    {
        id: "03",
        image: require("../assets/image/reciter-abdullah-awad-al-juhani.jpg")
    },
    {
        id: "04",
        image: require("../assets/image/Syaikh-Misyari-Rasyid.jpg")
    },
    {
        id: "05",
        image: require("../assets/image/yasser-al-dossari.jpg")
    },
]
const AudioQuranScreen = ({ navigation }: any) => {
    const { getAudioAllController, audioList, setSoundId, numberAudio, data, playAudio, play, setData, movingAudio,stopAudio,loading } = AudioQuran();
    const { styles } = StyleAudioQuran();
    useEffect(() => {
        getAudioAllController();
    }, [])
   

    const arraysData = useMemo(() => {
        return audioList;
    }, [audioList])
    return (
        <ChildHendle
            logo={true}
            titleHeader={"Audio Quran"}
            navigation={navigation}
            menu='menuNav'>
            <View style={{ marginTop: 20 }}>
                <PlayerAudioItem
                    data={data}
                    btnPlay={playAudio}
                    play={play}
                    btnMovingAudio={movingAudio}
                    btnStop={stopAudio}
                    loading={loading}
                    numberAudio={numberAudio}

                />
                <View style={{height: "15%"}}>
                    <ScrollView style={{ marginTop: 20 }} horizontal={true} showsHorizontalScrollIndicator={false}>
                        <View style={styles.boxImage}>
                            {arraysImage?.map((item) => (
                                <Pressable onPress={() => setSoundId(item.id)} key={item.id}>
                                    <View style={styles.imageBox}>
                                        {item.image && (
                                            <View style={[styles.boxImageStyle, { height: item.id == numberAudio ? 80 : 50, width: item.id == numberAudio ? 80 : 50 }]}>
                                                <Image
                                                    source={item.image}
                                                    style={{ height: "100%", width: "100%" }}
                                                />
                                            </View>
                                        )}
                                    </View>
                                </Pressable>
                            ))
                            }
                        </View >
                    </ScrollView>
                </View>
                <View style={[styles.listPlayerBox, {height: "60%"}]}>
                    <FlatList
                        data={arraysData}
                        keyExtractor={item => item.nama}
                        renderItem={({ item }) => (
                            <AudioQuranItem
                                item={item}
                                btnPlay={playAudio}
                                play={data?.namaLatin === item?.namaLatin ? play : false}
                                btnStop={stopAudio}
                                loading={data?.namaLatin === item?.namaLatin && loading}
                                numberAudio={numberAudio}
                            />
                        )}
                        showsVerticalScrollIndicator={false}
                        style={{ marginBottom: 20 }}
                    />
                </View>
            </View>
        </ChildHendle>
    )
}

export default AudioQuranScreen;