import { useState } from "react"
import AsyncStorage from "@react-native-async-storage/async-storage";
const TasbihController = () => {

    const [number, setNumber] = useState(0)
    const [isSoundActive, setIsSoundActive] = useState(true);
    
    const setStorageNumber = async() => {
        const numberStorage = await AsyncStorage.getItem("useNumberTasbih");
        setNumber(Number(numberStorage))
    }


    const btnHendle = async() => {
        setNumber(number + 1);
        const numberParsh = number + 1;
        await AsyncStorage.setItem("useNumberTasbih", numberParsh.toString())

    }

    const bntReset = async() => {
        setNumber(0);
        await AsyncStorage.setItem("useNumberTasbih", "0")
    }

    const btnChangeSound = () => {
        setIsSoundActive(!isSoundActive)
    }


    return {
        btnHendle,
        bntReset,
        btnChangeSound,
        number,
        isSoundActive,
        setStorageNumber
    }
}
export default TasbihController;