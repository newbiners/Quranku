import {
    newJuzTable,
    fetchDataJuz,
    deleteDatajuzById,
    deleteDataJuzAll,
    insertDataJuz,
    fetchDataJuzById
} from "../database/sqlLite"
const JuzReduser = () => {
    const newTablejuzReducer = async () => {
        try {
            await newJuzTable();
        } catch (error) {
            console.log(error, "error")
        }
    }

    const addDataJuz = async(payload: any) => {
          await insertDataJuz(payload.id, payload.data)
    }

    const fetchDataAll = async() => {
        try{
            return await fetchDataJuz();
        }catch(error){
            console.log(error, "error");
        }
    }

    const deleteDataAll = async() => {
        try{
            await deleteDataJuzAll()
        }catch(error){
            console.log(error)
        }
    }

    const deleteDataById = async(id: string) => {
        try{
            await deleteDatajuzById(id)
        }catch(error){
            console.log(error, "error")
        }
    }

    const fetchDataById = async(id : string) => {
        const data = await fetchDataJuzById(id)
        return data;
    }
    return {
        newTablejuzReducer,
        fetchDataAll,
        addDataJuz,
        deleteDataById,
        deleteDataAll,
        fetchDataById 
    }
};

export default JuzReduser;