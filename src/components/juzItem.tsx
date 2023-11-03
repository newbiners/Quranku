import { View, Text, Pressable } from "react-native";
import { StyleJuzItem } from "../styles";
import { IItemJuz } from "../interfaces/stateInterfaces";
const JuzItem = ({ number, mulai_dari, navigation }: IItemJuz): React.ReactElement => {
    const {styles} = StyleJuzItem(); 
    return (
        <Pressable onPress={() => navigation?.navigate("detail-juz", {id: number})}>
        <View style={styles.conatainer}>
            <View style={styles.boxNumber}>
                <Text style={styles.titleStyle}>{number}</Text>
            </View>
            <View>
                <Text style={styles.titleStyle}>Juz {number}</Text>
                <Text style={styles.descStyle}>Mulai Dari {mulai_dari}</Text>
            </View>
        </View>
        </Pressable>
    )
}

export default JuzItem;