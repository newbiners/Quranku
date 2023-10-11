/* eslint-disable react-hooks/rules-of-hooks */
import useAddFetchDataModel from '../viewModel/useAddFetchSuratModel';
import SuratArrays from "../redux/database/suratArrays";
import { useState } from 'react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const addFetchDataControllers = () => {
  const [data, setData] = useState<any[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const { addingData, fetchingDataAll, deleteDataAll, fetchingDataById, newTableNameSurat, addNamaDataSurat,fetchDataNameSurat } = useAddFetchDataModel();

  const cekUkuranData = () => {
    const data = SuratArrays();
  }

  const cekdata = async () => {
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

  const fetchDataById = async () => {
    const data = await fetchingDataById('113')
    setData(data)
  }

  const addDataSuratName = async () => {
    const data = SuratArrays();
    for (let i = 0; i < data.length; i++) {
      await addNamaDataSurat(`${i + 1}`, data[i]);
     }
  }
  const dataViewNameSurat = async () => {
    setLoading(true)
    const data = await fetchDataNameSurat();
    setData(data)
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }
  return {
    cekdata,
    dataView,
    data,
    deleteDataAll,
    fetchDataById,
    loading,
    cekUkuranData,
    newTableNameSurat,
    addDataSuratName,
    dataViewNameSurat
  };
};

export default addFetchDataControllers;
