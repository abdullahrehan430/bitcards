/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import {SafeAreaView, View, Animated, Easing} from 'react-native';
import React, {useEffect} from 'react';
import Loadingstyles from './styles';

const LoadingIndicator: React.FC = () => {
  let rotateValueHolder = new Animated.Value(0);

  const startImageRotateFunction = () => {
    rotateValueHolder.setValue(0);
    Animated.timing(rotateValueHolder, {
      toValue: 1,
      duration: 2000,
      easing: Easing.linear,
      useNativeDriver: false,
    }).start(() => startImageRotateFunction());
  };

  const rotateData = rotateValueHolder.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });
  startImageRotateFunction();
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={Loadingstyles.container}>
        {/* <Text style={Loadingstyles.titleText}>
          React Native Rotate Image View Using Animation
        </Text> */}

        <Animated.Image
          style={{
            width: 52,
            height: 42,
            transform: [{rotate: rotateData}],
          }}
          source={require('../../../assets/icons/logo.png')}
        />
        {/* <TouchableHighlight
          onPress={startImageRotateFunction}
          style={Loadingstyles.buttonStyle}>
          <Text style={Loadingstyles.buttonTextStyle}>
            Start Image Rotate Function
          </Text>
        </TouchableHighlight> */}
      </View>
    </SafeAreaView>
  );
};

export default LoadingIndicator;
