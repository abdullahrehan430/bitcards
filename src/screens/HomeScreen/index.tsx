/* eslint-disable no-shadow */
/* eslint-disable react-hooks/exhaustive-deps */
import {
  View,
  BackHandler,
  Alert,
  Text,
  TouchableOpacity,
  ToastAndroid,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Header from '../../shared/Header';
import {HomeProps} from './utilis';
import useFcm from '../../hooks/useFcm';
import styles from './styles';
import PushNotification from 'react-native-push-notification';
import {useNavigation} from '@react-navigation/native';
import messaging from '@react-native-firebase/messaging';
import {TextInput} from 'react-native-gesture-handler';
const HomeScreen: React.FC<HomeProps> = (props: HomeProps) => {
  const {navigation} = props;
  const isFocused = useNavigation();
  const [pushTitle, setPushTitle] = useState('');
  const [pushBody, setPushBody] = useState('');
  const [fcmToken, SetFcmToken] = useState<string>('');
  const {getFcm, loading} = useFcm();
  const backAction = () => {
    if (isFocused) {
      Alert.alert('Hold on!', 'Are you sure you want to go back?', [
        {
          text: 'Cancel',
          onPress: () => null,
          style: 'cancel',
        },
        {text: 'YES', onPress: () => BackHandler.exitApp()},
      ]);
    }
    return true;
  };
  const showFcmMessage = () => {
    if (pushTitle === '') {
      ToastAndroid.show('Please add notification title', ToastAndroid.SHORT);
    } else if (pushBody === '') {
      ToastAndroid.show('Please add notification body', ToastAndroid.SHORT);
    } else {
      getFcm(fcmToken, pushTitle, pushBody);
    }
  };
  useEffect(() => {
    PushNotification.configure({
      onRegister: function (token) {
        console.log(token);
      },
      onNotification: function (nof) {
        console.log(nof);
      },
      permissions: {
        alert: true,
        badge: true,
        sound: true,
      },
      popInitialNotification: true,
      requestPermissions: true,
    });
  }, []);
  useEffect(() => {
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      console.log(remoteMessage);
      PushNotification.localNotification({
        title: remoteMessage?.notification?.title,
        message: remoteMessage?.notification?.body,
      });
      // Alert.alert(
      //   remoteMessage?.notification?.title,
      //   remoteMessage?.notification?.body,
      //   [
      //     {
      //       text: 'Cancel',
      //       style: 'cancel',
      //     },
      //     {
      //       text: 'View',
      //       onPress: () => {
      //         navigation.navigate('WalletScreen', [{showWallet: true}]);
      //       },
      //     },
      //   ],
      // );
    });

    return unsubscribe;
  }, []);
  useEffect(() => {
    // Assume a message-notification contains a "type" property in the data payload of the screen to open

    messaging().onNotificationOpenedApp(remoteMessage => {
      console.log(remoteMessage);
      navigation.navigate('WalletScreen', [{showWallet: true}]);
    });
  }, []);
  useEffect(() => {
    // Get the device token
    messaging()
      .getToken()
      .then(token => {
        console.log(token);
        SetFcmToken(token);
      });
    return messaging().onTokenRefresh(token => {
      console.log(token);
      SetFcmToken(token);
    });
  }, []);
  useEffect(() => {
    messaging()
      .getInitialNotification()
      .then(remoteMessage => {
        if (remoteMessage !== null) {
          navigation.navigate('WalletScreen', [{showWallet: true}]);
        }
      });
  }, []);
  return (
    <View style={{flex: 1}}>
      <Header page="Home" />
      <View style={{flex: 1, justifyContent: 'center', alignContent: 'center'}}>
        <View style={styles.inputStyles}>
          <TextInput
            placeholder="Push Notification Title"
            value={pushTitle}
            onChangeText={text => setPushTitle(text)}
            style={{backgroundColor: '#fff', width: '80%'}}
            keyboardType="default"
          />
        </View>
        <View style={styles.inputStyles}>
          <TextInput
            placeholder="Push Notification Body"
            value={pushBody}
            onChangeText={text => setPushBody(text)}
            style={{backgroundColor: '#fff', width: '80%'}}
            keyboardType="default"
          />
        </View>
        <TouchableOpacity onPress={showFcmMessage} style={styles.pushBtn}>
          {!loading ? (
            <Text style={{color: 'white'}}>Send Push</Text>
          ) : (
            <ActivityIndicator size={'small'} color={'white'} />
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default HomeScreen;
