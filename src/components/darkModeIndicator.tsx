import React from 'react';
import {View, Pressable, StyleSheet} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faSun, faMoon} from '@fortawesome/free-solid-svg-icons';
import Animated, {useSharedValue, withSpring} from 'react-native-reanimated';
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { activeMode } from '../reducers/redux/redusers/darkModeReduser';
import { RootState } from '../reducers/redux/store/store';
function DarkModeIndicator() {
  const dispatch = useDispatch();
  const isActive = useSelector((state: RootState) => state.myStyle.value);
  const moveHorizontal = useSharedValue(0);
  const handlePress = () => {
    if (!isActive.isActive) {
      dispatch(activeMode('dark'));
    } else {
      dispatch(activeMode('light'));
    }
  };
  useEffect(() => {
    if (isActive.isActive) {
      moveHorizontal.value = withSpring(30);
    } else {
      moveHorizontal.value = withSpring(0);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isActive.isActive]);

  return (
    <View style={styles.containers}>
      <Pressable onPress={handlePress}>
        <Animated.View
          style={[
            {
              backgroundColor: `${!isActive.isActive ? '#D6E8DB' : '#0A4D68'}`,
              left: moveHorizontal,
            },
            styles.contanersAnimed,
          ]}>
          <FontAwesomeIcon
            icon={!isActive.isActive ? faSun : faMoon}
            size={20}
            color={!isActive.isActive ? '#000' : '#fff'}
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
