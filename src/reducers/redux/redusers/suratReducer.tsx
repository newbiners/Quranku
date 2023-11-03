/* eslint-disable @typescript-eslint/no-unused-vars */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  insertData,
  fetchData,
  fetchDataAll,
  deleteAllData,
  deleteItemById,
  newTable
} from '../database/sqlLite';
// eslint-disable-next-line @typescript-eslint/no-unused-vars



export const Surat = () => {
  const newTableReduser = async() => {
    try{
      await newTable()
    }catch(error){
      console.log(error, "error")
    }
  }
  
  const addData = async (payload: any) => {
    await insertData(payload.id, payload.data);
  }


  const fetchDataById = async (payload: any) => {
    return await fetchData(payload.id);
  }

  const fetchingDataAll = async (): Promise<any> => {
    const data = await fetchDataAll();
    return data
  }
  const deleteDataAll = async (): Promise<any> => {
    await deleteAllData();
  }
  const deleteDataById = async (_state: any, action: any): Promise<any> => {
    await deleteItemById(action.payload.id);
  }

  return {
    addData,
    fetchingDataAll,
    deleteDataAll,
    fetchDataById,
    newTableReduser 
  }
};

// export const { addData } = Surat.actions;
// export default Surat.reducer;
