/* eslint-disable @typescript-eslint/no-unused-vars */
import { Surat } from '../redux/redusers/suratReducer';
const useAddFetchDataModel = () => {
  const {addData,fetchingDataAll,deleteDataAll,fetchDataById,newTableNameSurat,addDataNama,fetchDataNameSurat} = Surat();
  const addingData = async (id : string, data : any) => {
    const payload = {
      id: id,
      data: data
    }
   await addData(payload)
  }
  const fetchingDataById = async (id: string) => {
    const payload = {
      id : id
    }
   return await fetchDataById(payload)
  }
  const addNamaDataSurat = async (id: string, data: any) => {
    const payload = {
      id: id,
      data: data
    }
    await addDataNama(payload)
  }
  return {
    addingData,
    fetchingDataAll,
    deleteDataAll,
    fetchingDataById,
    newTableNameSurat,
    addNamaDataSurat,
    fetchDataNameSurat
  };
};

export default useAddFetchDataModel;
