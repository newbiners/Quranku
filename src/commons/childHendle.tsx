import { View } from "react-native";
import { Header } from "../components";
import { StyleChildHendle } from "../styles";
import { ListSurah, ListJuz } from "../components";

interface IList {
    id?: string;
    setId?: () => void;
    btnHendle?: () => void;
}

interface IChild {
    logo: boolean;
    titleHeader: string;
    navigation: any
    menu: string;
    children: any;
    list_id?: string;
    list_setId?: any;
    list_btnHendle?: () => void;
    id?: any;
    data?: any;
    isNav?: boolean;
    list_name?: string;
}
const ChildHendle = ({ children,
    logo,
    titleHeader,
    navigation,
    menu,
    list_id,
    id,
    data,
    isNav,
    list_setId,
    list_btnHendle,
    list_name }: IChild) => {
    const { styles } = StyleChildHendle()
    return (
        <View style={{ height: "100%"}}>
            <View style={styles.containers}>
                <View style={styles.headerBox}>
                    <Header
                        logo={logo}
                        titleHeader={titleHeader}
                        navigation={navigation}
                        menu={menu}
                        data={data}
                        id={id}
                    />
                </View>
                {list_id && (
                    list_name == "surah" ?
                    < ListSurah
                        setId={list_setId}
                        id={list_id}
                        btnToTop={list_btnHendle}
                    />
                    :
                    <ListJuz
                        setId={list_setId}
                        id={list_id}
                        btnToTop={list_btnHendle}
                    />
                )}
            </View>
            <View style={styles.containerBox}>
                {children}
            </View>
        </View>
    )
}

export default ChildHendle;