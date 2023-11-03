/* eslint-disable @typescript-eslint/no-unused-vars */
import { Surat } from '../redux/redusers/suratReducer';
const useAddFetchDataModel = () => {
  const { newTableReduser: newTableViewModel,addData,fetchingDataAll,deleteDataAll,fetchDataById} = Surat();
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

  return {
    addingData,
    fetchingDataAll,
    deleteDataAll,
    fetchingDataById,
    newTableViewModel
  };
};

export default useAddFetchDataModel;
