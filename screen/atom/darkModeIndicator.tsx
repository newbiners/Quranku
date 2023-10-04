import React from 'react';
import {View, Pressable, StyleSheet} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faSun, faMoon} from '@fortawesome/free-solid-svg-icons';
import Animated, {useSharedValue, withSpring} from 'react-native-reanimated';
import {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import {activeMode} from '../../redux/redusers/darkModeReduser';
function DarkModeIndicator() {
  const dispatch = useDispatch();
  const [isIndicator, setIsIndicator] = useState<boolean>(false);
  const moveHorizontal = useSharedValue(0);
  const handlePress = () => {
    if (!isIndicator) {
      dispatch(activeMode('dark'));
      moveHorizontal.value = withSpring(30);
      setIsIndicator(true);
    } else {
      dispatch(activeMode('light'));
      moveHorizontal.value = withSpring(0);
      setIsIndicator(false);
    }
  };

  useEffect(() => {
    setIsIndicator(false);
  }, []);
  return (
    <View style={styles.containers}>
      <Pressable onPress={handlePress}>
        <Animated.View
          style={[
            {
              backgroundColor: `${!isIndicator ? '#D6E8DB' : '#0A4D68'}`,
              left: moveHorizontal,
            },
            styles.contanersAnimed,
          ]}>
          <FontAwesomeIcon
            icon={!isIndicator ? faSun : faMoon}
            size={20}
            color={!isIndicator ? '#000' : '#fff'}
          />
        </Animated.View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  containers: {
    width: 60,
    backgroundColor: '#fff',
    borderRadius: 20,
    overflow: 'hidden',
  },
  contanersAnimed: {
    height: 30,
    width: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
});

export default DarkModeIndicator;
