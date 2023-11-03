import { View, FlatList } from "react-native"
import {DetailSuratItem } from "../components";
import { useEffect, useMemo, useState } from "react";
import addFetchDataControllers from "../reducers/viewControllers/addFetchDataController";
import AudioQuran from "../reducers/viewControllers/audioQuran";
import { RootState } from "../reducers/redux/store/store";
import { useSelector } from "react-redux";
import ScrollToTopDetail from "../reducers/viewControllers/scrollToTopDetail";
import Loading from "../commons/loading";
import ChildHendle from "../commons/childHendle";
const DetailSurat = ({ navigation, route }: any) => {
    const { flatListRef, btnScrollToTop } = ScrollToTopDetail();
    const [id, setId] = useState(route?.params.id)
    const { fetchDataById, dataDetail, loading } = addFetchDataControllers()
    const { getAudioByIdController, audioList } = AudioQuran()
    const Style = useSelector((state: RootState) => state.myStyle.value);
    useEffect(() => {
        fetchDataById(id)
        getAudioByIdController(id)
    }, [id])

    const arrayAudio = useMemo(() => {
        return audioList
    }, [audioList])

    const arrayData = useMemo(() => {
        const number = dataDetail?.number
        const id = dataDetail?.id;
        const name = dataDetail?.name
        const name_latian = dataDetail?.name_latin
        const text = dataDetail && Object.entries(dataDetail?.text);
        const translations = dataDetail && Object.entries(dataDetail?.translations.id.text);
        return { text, translations, name_latian, id, name, number };
    }, [dataDetail])
    return (
        <ChildHendle
            logo={true}
            titleHeader={arrayData.name_latian}
            navigation={navigation}
            menu="bookmarkNav"
            id={arrayData.number}
            data={{ number: arrayData.number, name: arrayData.name, name_latian: arrayData.name_latian }}
            list_id={id}
            list_setId={setId}
            list_btnHendle={btnScrollToTop}
            list_name="surah"
            >
            {loading ?
                <View style={{ height: "100%" }}>
                    <Loading />
                </View>
                :
                <FlatList
                    ref={flatListRef}
                    data={arrayData.text}
                    keyExtractor={item => item[0]}
                    renderItem={({ item, index }) => (
                        <DetailSuratItem
                            urlAudio={audioList && arrayAudio[index]?.audio['04']}
                            number={item[0]}
                            ayat={item[1] as string}
                            translete={arrayData.translations[index][1]}
                        />
                    )}
                    style={{ paddingHorizontal: 5 }}
                />
            }
            </ChildHendle>
    )
}

export default DetailSurat;