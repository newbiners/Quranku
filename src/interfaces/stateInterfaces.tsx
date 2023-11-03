import { StackNavigationProp } from '@react-navigation/stack';
import { GestureResponderEvent } from 'react-native';
export interface HeaderState {
    navigation?: StackNavigationProp<any>;
    logo?: boolean | false;
    titleHeader: string;
    pressHandler?: () => void;
    menu: string;
    id?: string ;
    data?: any;
    isNav?: boolean;
  };


  //btnNavigation
  export interface IBtnNav {
    text1?: string;
    text2?: string;
    navigation?: StackNavigationProp<any>;
    titleNavigation?: string;
    type: string;
  }


  //menuNav
  import { SharedValue } from 'react-native-reanimated';
  export interface propsMenuState {
    moveing?: SharedValue<number>;
    offPressHendler?: (event: GestureResponderEvent) => void;
    navigation?: StackNavigationProp<any>;
  };

//btnNav2
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
  export interface btnState  {
    icon: IconDefinition;
    title?: string;
    bgColor?: string;
    color?: string;
    size?: number;
    width?: '52%' | '43%' | any ;
    index: number;
    navigation?: StackNavigationProp<any>;
    navTitle?: string;
  };
// itemjuz
 export interface IItemJuz {
    number: String;
    mulai_dari: string;
    navigation: StackNavigationProp<any>;
}


//item surat
export interface IItemSurat {
  number_of_ayah: string;
  name: string;
  number: string;
  nama_latin: string;
  navigation: StackNavigationProp<any>;
}