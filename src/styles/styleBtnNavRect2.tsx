import { StyleSheet } from "react-native"

const StyleBtnNavRect2 = () => {
    const styles = StyleSheet.create({
        containers: {
          height: 110,
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 20,
          marginTop: 10,
          overflow: 'hidden',
          elevation: 10
    
        },
        boxText: {
          marginTop: 10,
          alignItems: 'center',
        },
        textStyle: {
          fontSize: 20,
          fontWeight: '700',
        },
      });
      return {styles}
}

export default StyleBtnNavRect2;