/* eslint-disable @typescript-eslint/no-unused-vars */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  insertData,
  fetchData,
  fetchDataAll,
  deleteAllData,
  deleteItemById,
  newNameSuratTable,
  insertNameSurat,
  fetchDataNameSurat
} from '../database/sqlLite';
// eslint-disable-next-line @typescript-eslint/no-unused-vars


export const Surat = () => {
  const addData = async (payload: any) => {
    await insertData(payload.id, payload.data);
  }

 const addDataNama = async (payload: any) => {
  await insertNameSurat(payload.id, payload.data);
  }

  const fetchDataById = async (payload: any) => {
    return await fetchData(payload.id);
  }

  const fetchingDataAll = async (): Promise<any> => {
    return await fetchDataAll();
  }
  const deleteDataAll = async (): Promise<any> => {
    await deleteAllData();
  }
  const deleteDataById = async (_state: any, action: any): Promise<any> => {
    await deleteItemById(action.payload.id);
  }
  const newTableNameSurat = async () => {
    await newNameSuratTable()
  }
  return {
    addData,
    fetchingDataAll,
    deleteDataAll,
    fetchDataById,
    newTableNameSurat,
    addDataNama,
    fetchDataNameSurat
  }
};

// export const { addData } = Surat.actions;
// export default Surat.reducer;
