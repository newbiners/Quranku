import useAddFetchDataModel from '../viewModel/useAddFetchSuratModel';
import SuratArrays from "../redux/database/suratArrays";
import { useState } from 'react';
const addFetchDataControllers = () => {
  const [data, setData] = useState<any[]>([])
  const [dataDetail, setDataDetail] = useState<any>()
  const [loading, setLoading] = useState<boolean>(false)
  const { newTableViewModel: newTableController,
    addingData,
    fetchingDataAll,
    deleteDataAll: deleteDataAllController,
    fetchingDataById,
  } = useAddFetchDataModel();


 
  const addDataSurah = async () => {
    const data = SuratArrays();
    for (let i = 0; i < data.length; i++) {
     await addingData(`${i + 1}`, data[i]);
    }
  };
  const dataView = async () => {
    setLoading(true)
    const data = await fetchingDataAll();
    setData(data)
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }

  const fetchDataById = async (id: string) => {
    try{
      setLoading(true)
      const data = await fetchingDataById(id)
      const text = JSON.parse(data.text)
      const translations = JSON.parse(data.translations)
      setDataDetail({id: data.id, name: data.name, name_latin: data.name_latian, number: data.number, number_of_ayah:data.number_of_ayah, text: text,translations: translations })
    }catch(error) {
      console.log(error, "error")
    }finally{
      setLoading(false)
    }
  }

  return {
    addDataSurah,
    dataView,
    data,
    deleteDataAllController,
    fetchDataById,
    loading,
    newTableController,
    dataDetail
  };
};

export default addFetchDataControllers;
