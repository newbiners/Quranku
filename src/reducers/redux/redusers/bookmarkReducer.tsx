import { newTableBookmark, AddBookmark, fetchDataBookmark, fetchDataBookmarkById, deletebookmarkById } from "../database/sqlLite"

export const BookmarkReducers = () => {
    const newTable = async () => {
        try {
            await newTableBookmark();
        } catch (error) {
            console.log(error);
        }
    }
    const AddBookmarkReducer = async (payload: any) => {
        console.log(payload, "payload")
        try {
            await AddBookmark(payload.data)
        } catch (error) {
            console.log(error, "error data")
        }
    }

    const fetchData = async () => {
        try {
            return await fetchDataBookmark()
        } catch (error) {
            console.log(error, "error")
        }
    }

    const fetchDataById = async (number: string) => {
        try {
            return await fetchDataBookmarkById(number)
        } catch (error) {
            console.log(error, "error")
        }
    }

    const deletDataById = async(number: string) => {
        try{
            await deletebookmarkById(number);
        }catch(error){
            console.log(error, "error")
        }
    }
    return {
        newTable,
        AddBookmarkReducer,
        fetchData,
        fetchDataById,
        deletDataById
    }
}