import { View, StatusBar,Text } from 'react-native'
import LogoDark from '../assets/logoDark.svg';
import { useSelector } from 'react-redux';
import { RootState } from '../reducers/redux/store/store';
const Loading = () => {
    const Style = useSelector((state: RootState) => state.myStyle.value);
    return (
        <View
            style={{
                flex: 1,
                backgroundColor: Style.bgBox,
                justifyContent: 'center',
                alignItems: 'center',
            }}>
            <StatusBar backgroundColor={Style.bgBox} />
            <View
                style={{
                    backgroundColor: Style.backgroundColor1,
                    padding: 20,
                    borderRadius: 20,
                    elevation: 20,
                }}>
                <LogoDark height={130} width={130} />
            </View>
            <Text style={{ color: Style.backgroundColor1, fontSize: 20, fontWeight: '600' }}>
                Quranku...
            </Text>
        </View>
    )
}

export default Loading;