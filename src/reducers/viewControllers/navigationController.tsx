import { useState } from "react"
import { useSharedValue, withSpring } from 'react-native-reanimated';

const NavigationControllers = () => {
    const [isIndicator, setIsIndicator] = useState<boolean>(false);
    const widthMove = useSharedValue(-260);
    const MenuNavigate = () => {
        if (isIndicator === false) {
            widthMove.value = withSpring(10);
            setIsIndicator(true);
          } else {
            widthMove.value = withSpring(-260);
            setIsIndicator(false);
          }
    }

    return {
        MenuNavigate,
        widthMove
    }
}

export default NavigationControllers;