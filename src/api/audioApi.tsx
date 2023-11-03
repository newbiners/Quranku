import axios from "axios";
import config from '../../config'
const AudioApi = () => {
    const getAudioById = async (id: string) => {
        try{
            const {data} = await axios({
                method: "get",
                url: config.API_AUDIO + `/api/v2/surat/${id}`,
            })
            return data
        }catch(error){
            console.log(error, "error")
        }
    }

    const getAudioAll = async () => {
        try{
            const {data} = await axios({
                method: "get",
                url: config.API_AUDIO + `/api/v2/surat`
            })
            return data
        }catch(error){
            console.log(error, "error")
        }
    }
    return {
        getAudioById,
        getAudioAll
    }
}

export default AudioApi;