import JuzReduser from "../redux/redusers/juzReducers";

const useAddFetchDataJuz = () => {
    const {
        newTablejuzReducer: newTableJuzViewModel,
        addDataJuz,
        deleteDataAll: deleteDataAllViewModel,
        deleteDataById,
        fetchDataAll: fetchDataAllViewModel,
        fetchDataById
    } = JuzReduser();


    const addDataJuzViewModel = async (id: string, data: any) => {
        try {
            const payload = {
                id: id,
                data: data
            }
            await addDataJuz(payload)
        } catch (error) {
            console.log(error, "error")
        }
    }
    const deleteDataByIdViewModel = async(id: string) => {
        try{
           return await deleteDataById(id)
        }catch(error) {
            console.log(error, "error")
        }
    }

    const fetchDataByIdViewModel = async(id: string) => {
        try{
          return await fetchDataById(id)
        }catch(error){
            console.log(error, "error")
        }
    }

    return {
        addDataJuzViewModel,
        newTableJuzViewModel,
        deleteDataAllViewModel,
        fetchDataAllViewModel,
        deleteDataByIdViewModel,
        fetchDataByIdViewModel
    }

}

export default useAddFetchDataJuz;