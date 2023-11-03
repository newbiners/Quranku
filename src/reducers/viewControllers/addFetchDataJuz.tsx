import useAddFetchDataJuz from "../viewModel/useAddFetchDataJuz";
import arraysJuz from "../redux/database/juzArrays";
import { useState } from "react";
const AddFetchDataJuzController = () => {
    const { newTableJuzViewModel,
        fetchDataAllViewModel,
        addDataJuzViewModel,
        deleteDataAllViewModel,
        deleteDataByIdViewModel,
        fetchDataByIdViewModel
    } = useAddFetchDataJuz()
    const [data, setData] = useState<any>();
    const [dataId, setDataId] = useState<any>()
    const [loading, setLoading] = useState<boolean>(false)
    const newTableJuzController = async () => {
        try {
            await newTableJuzViewModel();
        } catch (error) {
            console.log(error, "error")
        }
    }

    const cekData = () => {
        const data = arraysJuz()

    }


    const addDataJuzController = async () => {
        const data = arraysJuz();
        for (let i = 0; i < data.length; i++) {
            await addDataJuzViewModel(`${i + 1}`, data[i])

        }
    }

    const fetchDataJuzController = async () => {
        try {
            setLoading(true)
            const data = await fetchDataAllViewModel();
            setData(data)
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    const deleteDataAll = async () => {
        try {
            setLoading(true)
            await deleteDataAllViewModel();
        } catch (error) {
            console.log(error, "error")
        } finally {
            setLoading(false)
        }
    }

    const fetchDataByIdController = async (id: string) => {
        try {
            setLoading(true)
            const dataStr = await fetchDataByIdViewModel(id);
            const dataParse = JSON.parse(dataStr?.data);
            setDataId(dataParse);
        } catch (error) {
            console.log(error, "data")
        } finally {
            setLoading(false)
        }
    }
    return {
        newTableJuzController,
        addDataJuzController,
        fetchDataJuzController,
        deleteDataAll,
        fetchDataByIdController,
        cekData,
        data,
        dataId,
        loading
    }
}

export default AddFetchDataJuzController;