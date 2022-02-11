/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useContext} from 'react';
import {View} from 'react-native';
import {Logo} from '../../config/svgs';
//import {UserData} from '../../contexts/auth';
import styles from './styles';
import {useEffect} from 'react';

const Splash: React.FC = (props: any) => {
  useEffect(() => {
    const splashTime = setTimeout(() => {
      props.navigation.navigate('TabNavigation');
    }, 2000);
    return () => {
      clearTimeout(splashTime);
    };
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.imageWrapper}>
        <Logo style={styles.logoImage} />
      </View>
    </View>
  );
};

export default Splash;
