import { View, StatusBar,Text } from 'react-native'
import LogoDark from '../assets/logoDark.svg';
const Loading = () => {
    return (
        <View
            style={{
                flex: 1,
                backgroundColor: '#fff',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
            <StatusBar backgroundColor={'#fff'} />
            <View
                style={{
                    backgroundColor: '#99A98F',
                    padding: 20,
                    borderRadius: 20,
                    elevation: 20,
                }}>
                <LogoDark height={130} width={130} />
            </View>
            <Text style={{ color: '#99A98F', fontSize: 20, fontWeight: '600' }}>
                Quranku...
            </Text>
        </View>
    )
}

export default Loading;