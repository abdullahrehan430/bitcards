/* eslint-disable eqeqeq */
/* eslint-disable react-native/no-inline-styles */
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import {BitCoin} from '../src/config/svgs';
import {HomeTabIcon} from '../src/config/svgs';
import {SettingIconTab} from '../src/config/svgs';
import {WalletTabIcon} from '../src/config/svgs';
import HomeScreen from '../src/screens/HomeScreen';
import WalletScreen from '../src/screens/WalletScreen';
import SettingsScreen from '../src/screens/SettingsScreen';
import BitcoinScreen from '../src/screens/BitcoinScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
const TabNavigation = () => {
  const Tab = createBottomTabNavigator();
  const CustomTabBar = ({state, descriptors, navigation}) => {
    let filteredProps = [];
    // state.forEach(data => {
    //   if (data.routes.name !== 'LeadsPage') {
    //     filteredProps = data;
    //   }
    // });
    for (let i = 0; i < state.routes.length; i++) {
      if (
        state.routes[i].name !== 'ChatListing'
        //&&
        //state.routes[i].name !== 'ListingFilter'
      ) {
        filteredProps[i] = state.routes[i];
      }
    }
    //console.log(filteredProps);
    const focusedOptions = descriptors[state.routes[state.index].key].options;

    if (focusedOptions.tabBarVisible === false) {
      return null;
    }
    return (
      <View style={styles.tab}>
        {filteredProps.map((route, index) => {
          const {options} = descriptors[route.key];
          const label = '';
          // options.tabBarLabel !== undefined
          //   ? options.tabBarLabel
          //   : options.title !== undefined
          //   ? options.title
          //   : route.name;

          const isFocused = state.index === index;

          const onPress = async () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
            // await analytics().logEvent(route.name, {
            //   item: route.name,
            // });
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          return (
            <TouchableOpacity
              accessibilityRole="button"
              accessibilityState={isFocused ? {selected: true} : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              key={index}
              style={styles.tabIcons}>
              {route.name == 'HomeScreen' ? (
                <>
                  <HomeTabIcon
                    height={25}
                    width={36}
                    fill={isFocused ? '#1872E7' : '#B1B5BB'}
                    style={styles.tabImg}
                  />
                  {isFocused ? <View style={styles.activeTabColor} /> : <></>}
                </>
              ) : route.name == 'BitcoinScreen' ? (
                <>
                  <BitCoin
                    height={25}
                    width={36}
                    fill={isFocused ? '#1872E7' : '#B1B5BB'}
                    style={styles.tabImg}
                  />
                  {isFocused ? <View style={styles.activeTabColor} /> : <></>}
                </>
              ) : route.name == 'WalletScreen' ? (
                <>
                  <WalletTabIcon
                    height={25}
                    width={36}
                    fill={isFocused ? '#1872E7' : '#B1B5BB'}
                    style={styles.tabImg}
                  />
                  {isFocused ? <View style={styles.activeTabColor} /> : <></>}
                </>
              ) : route.name == 'SettingsScreen' ? (
                <>
                  <SettingIconTab
                    height={25}
                    width={36}
                    fill={isFocused ? '#1872E7' : '#B1B5BB'}
                    style={styles.tabImg}
                  />
                  {isFocused ? <View style={styles.activeTabColor} /> : <></>}
                </>
              ) : null}
              <Text
                style={{
                  color: isFocused ? '#1872E7' : '#B1B5BB',
                  fontSize: 8,
                  marginTop: 5,
                }}>
                {label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };
  return (
    <Tab.Navigator
      labeled={false}
      screenOptions={{
        headerShown: false,
      }}
      tabBar={props => <CustomTabBar {...props} />}>
      <Tab.Screen name="HomeScreen" component={HomeScreen} />
      <Tab.Screen name="BitcoinScreen" component={BitcoinScreen} />
      <Tab.Screen name="WalletScreen" component={WalletScreen} />
      <Tab.Screen name="SettingsScreen" component={SettingsScreen} />
    </Tab.Navigator>
  );
};
const styles = StyleSheet.create({
  activeTabColor: {
    marginTop: 2,
    borderColor: '#4141E7',
    borderWidth: 2,
    borderRadius: 20,
  },
  tab: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    height: 60,
    backgroundColor: '#FAFAFB',
    //     paddingLeft: 15,
    // paddingRight:15

    //  marginLeft:-8
  },
  tabIcons: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabImg: {
    alignSelf: 'center',
  },
  rotate180: {
    alignSelf: 'center',
    transform: [{rotate: '180deg'}],
  },

  tabText: {
    fontSize: 12,
    marginTop: 5,
  },
});
export default TabNavigation;
