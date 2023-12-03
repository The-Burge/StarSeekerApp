import React, {useRef, useEffect} from 'react';
import {View, Animated, StyleSheet} from 'react-native';

const Starfield: React.FC = () => {
  const stars = useRef<number[]>([]);
  const animatedValues = useRef<Animated.Value[]>([]);

  useEffect(() => {
    stars.current = Array(100)
      .fill()
      .map((_, index) => index);
    animatedValues.current = stars.current.map(() => new Animated.Value(0));

    const animations = animatedValues.current.map((value, index) => {
      return Animated.timing(value, {
        toValue: 1,
        duration: 5000 + Math.random() * 5000,
        useNativeDriver: true,
        isInteraction: false,
        delay: Math.random() * 5000,
      });
    });

    Animated.loop(Animated.parallel(animations)).start();
  }, []);

  return (
    <View style={styles.container}>
      {stars.current.map((star, index) => (
        <Animated.View
          key={index}
          style={[
            styles.star,
            {
              opacity: animatedValues.current[index],
              transform: [
                {
                  translateX: animatedValues.current[index].interpolate({
                    inputRange: [0, 1],
                    outputRange: [-100, 500],
                  }),
                },
                {
                  translateY: animatedValues.current[index].interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, 800],
                  }),
                },
              ],
            },
          ]}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  star: {
    position: 'absolute',
    backgroundColor: 'white',
    width: 2,
    height: 2,
  },
});

export default Starfield;
