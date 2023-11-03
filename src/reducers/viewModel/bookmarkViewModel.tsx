import { BookmarkReducers } from "../redux/redusers/bookmarkReducer";

export const BookmarkViewModel = () => {
    const {newTable, AddBookmarkReducer, fetchData,fetchDataById,deletDataById} = BookmarkReducers()


    const AddBookmarkViewModel = async (data: any) => {
        try{
            const payload = {
                data: data
            }
            await AddBookmarkReducer(payload);
        }catch(error){
            console.log(error, "error")
        }
    }


    return {
        newTable,
        AddBookmarkViewModel,
        fetchData,
        fetchDataById,
        deletDataById
    }
}