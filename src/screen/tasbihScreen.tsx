import { View, Text, Pressable } from 'react-native';
import { faArrowsRotate } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { StyleTasbih } from '../styles';
import ChildHendle from '../commons/childHendle';
import { useEffect } from 'react';
import { TasbihController } from '../reducers/viewControllers';
const TasbihScreen = ({ navigation }: any) => {
    const { styles } = StyleTasbih()
    const { bntReset,btnHendle, number,setStorageNumber } = TasbihController()
   useEffect(() => {
    setStorageNumber();
   },[])
    return (
        <View>
            <ChildHendle
                logo={true}
                titleHeader={"Tasbih"}
                navigation={navigation}
                menu='menuNav'
            >
                <View style={{ marginTop: 10 }}>
                    <View>
                        <Pressable onPress={bntReset}>
                            <FontAwesomeIcon icon={faArrowsRotate} size={60} color={styles.iconReset.color} />
                        </Pressable>
                    </View>
                    <View style={styles.numberBox}>
                        <Text style={styles.numberStyle}>{number}</Text>
                    </View>
                    <View style={styles.btnBox}>
                        <Pressable style={styles.btnStyle} android_ripple={{ color: "#fff" }} onPress={btnHendle} />
                    </View>
                </View>
            </ChildHendle>
        </View>
    )
}

export default TasbihScreen;