import { View, Text, ScrollView } from "react-native"
import { useSelector } from "react-redux";
import { RootState } from "../reducers/redux/store/store";
import ChildHendle from "../commons/childHendle";
const TajwidScreen = ({ navigation }: any) => {
    const Style = useSelector((state: RootState) => state.myStyle.value);
    return (
        <ChildHendle
            logo={true}
            titleHeader="Tajwid"
            navigation={navigation}
            menu="menuNav"
        >

            <ScrollView>
                <View style={{flexDirection: "column", gap: 10 }}>
                    <Text style={{color: Style.colorText3, fontSize: 20}}>
                        Tajwid adalah ilmu dan seni dalam membaca Al-Quran dengan baik, benar, dan sesuai dengan aturan yang telah ditentukan. Ini melibatkan penggunaan peraturan fonetik dan tata cara yang tepat untuk mengucapkan huruf-huruf Arab dan kata-kata Al-Quran. Tujuan utama dari tajwid adalah untuk menjaga keaslian dan kebenaran dalam pengucapan dan makna teks Al-Quran.
                        Contoh-contoh aturan tajwid yang umum meliputi:
                    </Text>
                    <Text style={{color: Style.colorText3, fontSize: 30, fontWeight: "700"}}>
                        Hukum Nun Sukun dan Tanwin:
                    </Text>
                    <Text style={{color: Style.colorText3, fontSize: 20}}>
                        Ketika Nun Sukun (نْ) atau Tanwin (ـًـٍـٌ) bertemu dengan huruf yang memiliki Harkat (tanda harakat) seperti Fathah (ــَ), Kasrah (ــِ), atau Dammah (ــُ), maka Anda harus melakukan "Idgham" atau "penggabungan" di mana Anda menggabungkan suara Nun Sukun atau Tanwin dengan huruf berikutnya. Contoh: "مَنْ يَهْدِي" (Man yahdi).
                    </Text>
                    <Text style={{color: Style.colorText3, fontSize: 30, fontWeight: "700"}}>
                        Hukum Qalqalah:
                    </Text>
                    <Text style={{color: Style.colorText3, fontSize: 20}}>
                        Qalqalah adalah getaran atau getaran yang terjadi pada huruf-huruf yang disebutkan dalam aturan Qalqalah ketika huruf-huruf ini muncul dalam bentuk sukun (tanpa tanda harakat) dan sesudahnya ada waqaf (berhenti sejenak). Huruf-huruf Qalqalah adalah Ta' (ط), Tha' (ظ), Ba' (ب), Jim (ج), dan Dal (د). Contoh: "بَنِي إِسْرَائِيلَ" (Bani Israa'il).
                    </Text>
                    <Text style={{color: Style.colorText3, fontSize: 30, fontWeight: "700"}}>
                        Hukum Ikhfa:
                    </Text>
                    <Text style={{color: Style.colorText3, fontSize: 20}}>
                        Ikhfa adalah penggabungan huruf dengan suara Nun Sukun atau Tanwin sehingga suara Nun Sukun atau Tanwin sedikit terdengar. Contoh: "مَنْ نُسْكِيهِ" (Man nuskihi).
                    </Text>
                    <Text style={{color: Style.colorText3, fontSize: 30, fontWeight: "700"}}>
                        Hukum Ghunnah:
                    </Text>
                    <Text style={{color: Style.colorText3, fontSize: 20}}>
                        Ghunnah adalah cara mengucapkan huruf mim (م) atau nun (ن) dengan suara bergetar dan merdu. Ini terjadi ketika huruf mim atau nun disuarakan dengan tanda harakat Sukun, dan ada huruf hijaiyah berikutnya. Contoh: "مُؤْمِنُونَ" (Mu'minun).
                    </Text>
                    <Text style={{color: Style.colorText3, fontSize: 30, fontWeight: "700"}}>
                        Hukum Idzhar:
                    </Text>
                    <Text style={{color: Style.colorText3, fontSize: 20}}>
                        Idzhar adalah pengucapan huruf Nun Sukun atau Tanwin dengan jelas tanpa adanya penggabungan atau perubahan suara. Contoh: "وَإِذَا" (Wa idza).
                    </Text>
                    <Text style={{color: Style.colorText3,fontSize: 30, fontWeight: "700"}}>
                        Hukum Iqlab:
                    </Text>
                    <Text style={{color: Style.colorText3, fontSize: 20}}>
                        Iqlab adalah perubahan huruf Nun Sukun atau Tanwin menjadi huruf Mim (م) dengan cara menutup bibir. Contoh: "فَيَنقَلِبُونَ" (Fayanqalibun).
                    </Text>
                    <Text style={{color: Style.colorText3, fontSize: 20}}>
                        Ini hanya beberapa contoh aturan tajwid dalam Al-Quran. Penting untuk diingat bahwa tajwid adalah ilmu yang memerlukan latihan dan bimbingan dari seorang guru tajwid yang berpengalaman untuk memahami dan menguasainya sepenuhnya. Praktik tajwid yang baik dapat meningkatkan pengalaman membaca dan mendengarkan Al-Quran dengan lebih baik serta dengan penghormatan yang layak terhadap kitab suci Islam ini.
                    </Text>
                </View>
            </ScrollView>
        </ChildHendle>
    )
}

export default TajwidScreen;