import AudioApi from "../../api/audioApi";
import { useState } from "react";
import Sound from "react-native-sound";

const AudioQuran = () => {
    const { getAudioById, getAudioAll } = AudioApi();
    const [play, setPlay] = useState(false);
    const [audioList, setAudioList] = useState<any>(); // Inisialisasi dengan null
    const [audio, setAudio] = useState<Sound | null>(null); // State audio untuk mengelola objek Sound\
    const [numberAudio, setNumberAudio] = useState("04");
    const [data, setData] = useState<any>({ "arti": "Pembukaan", "audioFull": { "01": "https://equran.nos.wjv-1.neo.id/audio-full/Abdullah-Al-Juhany/001.mp3", "02": "https://equran.nos.wjv-1.neo.id/audio-full/Abdul-Muhsin-Al-Qasim/001.mp3", "03": "https://equran.nos.wjv-1.neo.id/audio-full/Abdurrahman-as-Sudais/001.mp3", "04": "https://equran.nos.wjv-1.neo.id/audio-full/Ibrahim-Al-Dossari/001.mp3", "05": "https://equran.nos.wjv-1.neo.id/audio-full/Misyari-Rasyid-Al-Afasi/001.mp3" }, "deskripsi": "Surat <i>Al Faatihah</i> (Pembukaan) yang diturunkan di Mekah dan terdiri dari 7 ayat adalah surat yang pertama-tama diturunkan dengan lengkap  diantara surat-surat yang ada dalam Al Quran dan termasuk golongan surat Makkiyyah. Surat ini disebut <i>Al Faatihah</i> (Pembukaan), karena dengan surat inilah dibuka dan dimulainya Al Quran. Dinamakan <i>Ummul Quran</i> (induk Al Quran) atau <i>Ummul Kitaab</i> (induk Al Kitaab) karena dia merupakan induk dari semua isi Al Quran, dan karena itu diwajibkan membacanya pada tiap-tiap sembahyang.<br> Dinamakan pula <i>As Sab'ul matsaany</i> (tujuh yang berulang-ulang) karena ayatnya tujuh dan dibaca berulang-ulang dalam sholat.", "jumlahAyat": 7, "nama": "الفاتحة", "namaLatin": "Al-Fatihah", "nomor": 1, "tempatTurun": "Mekah" })
    const [loading, setLoading] = useState(false)
    const playAudio = (url: string, data?: any) => {
        if (url) {
            stopAudio()
            setData(data);
            setLoading(true)
            const audioObj = new Sound(url, Sound.MAIN_BUNDLE, (error) => {
                if (error) {
                    console.log('Gagal memuat suara', error);
                } else {
                    console.log('Sukses memuat suara');
                    const duration = audioObj.getDuration();
                    audioObj.play((success) => {
                        if (success) {
                            // console.log('Audio selesai diputar');
                        } else {
                            console.log('Gagal memutar audio');
                        }
                    })
                    setLoading(false)
                    setPlay(true);
                    setTimeout(() => {
                        setPlay(false)
                    }, duration * 1000)
                    setAudio(audioObj);
                }
            });
        }
    }

    const manipulationArrays = { "audio": { "01": "", "02": "", "03": "", "04": "", "05": "" } }
    const getAudioByIdController = async (id: string) => {
        try {
            const { data } = await getAudioById(id);
            if (id === "1") {
                setAudioList(data.ayat);
            } else {
                setAudioList([manipulationArrays, ...data.ayat]);
            }
        } catch (error) {
            console.log(error);
        }
    };


    const stopAudio = () => {
        if (audio) {
            audio.stop(() => {
                setPlay(false);
            });
        }
    };

    const getAudioAllController = async () => {
        try {
            const { data } = await getAudioAll()
            // console.log(data, "data data ======><><><><><")
            setAudioList(data)
        } catch (error) {
            console.log(error, "error")
        }
    }


    const movingAudio = (nomor: any) => {
        console.log(nomor, "cek nomor")
        // const dataParsh = JSON.parse(audioList)

        const filtered = audioList && audioList.filter((item: { nomor: any; }) => item.nomor == nomor)
        // console.log(filtered[0], "audio list")
        setData(filtered[0])
        stopAudio()
    }

    const setSoundId = (id: string) => {
        stopAudio()
        setNumberAudio(id)
    }
    return {
        getAudioAllController,
        getAudioByIdController,
        playAudio,
        stopAudio,
        play,
        audioList,
        setSoundId,
        numberAudio,
        data,
        setData,
        movingAudio,
        loading
    };
};

export default AudioQuran;
