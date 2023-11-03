import AsyncStorage from "@react-native-async-storage/async-storage";
import addFetchDataControllers from "../reducers/viewControllers/addFetchDataController";
import { AddFetchDataJuzController,BookmarkControllers } from "../reducers/viewControllers";
import { useState } from "react";
const useOpemApp = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const { addDataSurah , newTableController} = addFetchDataControllers();
    const {
        addDataJuzController,
        newTableJuzController,
      } = AddFetchDataJuzController();
      const {newTableController : newTableControllerBookmark} = BookmarkControllers();
    const addDataFistrOpen = async () => {
        setLoading(true);
        const checkPoint = await AsyncStorage.getItem("useOpen");
        try {
            if (!checkPoint) {
                await newTableControllerBookmark();
                await newTableController();
                await newTableJuzController();
                await addDataSurah();
                await addDataJuzController();
                await AsyncStorage.setItem("useNumberTasbih", "0")
                await AsyncStorage.setItem("useOpen", "true");
            }
        } catch (error) {
            console.log(error, "error add data")
        } finally {
            setLoading(false)
        }
    }
    return {addDataFistrOpen, loading}
}

export default useOpemApp;