import { BookmarkViewModel } from "../viewModel/bookmarkViewModel"
import { useState } from "react";
const BookmarkControllers = () => {
    const { newTable, AddBookmarkViewModel, fetchData, fetchDataById, deletDataById } = BookmarkViewModel();
    const [isNav, setIsNav] = useState(false)
    const [data, setData] = useState<any>([])
    const newTableController = async () => {
        try {
            await newTable()
        } catch (error) {
            console.log(error, "error")
        }
    }

    const AddBookmarkController = async (data: any) => {
        console.log(data, "data add bookmark")
        try {
            await AddBookmarkViewModel(data);
            setIsNav(true)
        } catch (error) {
            console.log(error, "error")
        }
    }

    const fetchDataController = async () => {
        try {
            const data = await fetchData()
            setData(data)
        } catch (error) {
            console.log(error, "error")
        }
    }

    const fetchDataByIdController = async (number: string) => {
        try {
            const data = await fetchDataById(number);
            console.log(data, "data")
            setIsNav(false);
            if(data) {
                setIsNav(true);
            }

        } catch (error) {
            console.log(error)
        }
    }

    const deleteDataByIdController = async (number: string) => {
        console.log(number, "number")
        try {
            await deletDataById(number);
            setIsNav(false);
        } catch (error) {
            console.log(error, "error")
        }
    }


    return {
        newTableController,
        AddBookmarkController,
        isNav,
        fetchDataController,
        data,
        fetchDataByIdController,
        deleteDataByIdController
    }
}

export default BookmarkControllers;