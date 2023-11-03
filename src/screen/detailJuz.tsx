import { View, Text, FlatList } from 'react-native';
import { useState, useEffect, useMemo } from 'react';
import AddFetchDataJuzController from '../reducers/viewControllers/addFetchDataJuz';
import { Header } from '../components';
import { faArrowLeft, faGear } from '@fortawesome/free-solid-svg-icons';
import ListJuz from '../components/listJuz';
import { useSelector } from 'react-redux';
import { RootState } from '../reducers/redux/store/store';
import ListJuzDetail from '../components/listJuzDetail';
import ScrollToTopDetail from '../reducers/viewControllers/scrollToTopDetail';
import Loading from '../commons/loading';
import { useCallback, useRef } from 'react';
import ChildHendle from '../commons/childHendle';
const DetailJuz = ({ route, navigation }: any) => {
    const Style = useSelector((stete: RootState) => stete?.myStyle?.value);
    const { fetchDataByIdController, dataId, loading } = AddFetchDataJuzController();
    const [id, setId] = useState(route.params.id);
    const { flatListRef, btnScrollToTop } = ScrollToTopDetail();
    const [visibleData, setVisibleData] = useState<any>('');
    const onViewCallBack = useCallback((viewableItems: any) => {
        setVisibleData(viewableItems?.changed[0].item.name_latin);
    }, [])

    const viewConfigRef = useRef({ viewAreaCoveragePercentThreshold: 50 })

    useEffect(() => {
        try {
            fetchDataByIdController(id);
        } catch (error) {
            console.log(error)
        }
    }, [id])

    const dataArray = useMemo(() => {
        return dataId
    }, [dataId])

    return (
        <View>
            <ChildHendle
                logo={true}
                titleHeader={visibleData}
                navigation={navigation}
                menu='menuNav'
                id={id}
                list_id={id}
                list_setId={setId}
                list_btnHendle={btnScrollToTop}
                list_name='juz'
            >
                <View>
                    {loading ?
                        <View style={{ height: '100%' }}>
                            <Loading />
                        </View>
                        :
                        <FlatList
                            onViewableItemsChanged={onViewCallBack}
                            ref={flatListRef}
                            data={dataArray}
                            keyExtractor={(item) => item.name}
                            viewabilityConfig={viewConfigRef.current}
                            renderItem={({ item }) =>
                                <View>
                                    <ListJuzDetail
                                        data={item.text}
                                        dataTrans={item.translations}
                                    />
                                </View>
                            }

                        />
                    }
                </View>
            </ChildHendle>
        </View>
    )
}

export default DetailJuz;