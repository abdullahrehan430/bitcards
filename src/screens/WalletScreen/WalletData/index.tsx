/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Animated,
  Pressable,
} from 'react-native';
import React from 'react';
import styles from './styles';
import {IconWithDrwa, IconWithDrawBig} from '../../../config/svgs';
interface WalletHeaderProps {
  openDetailModal: (
    index: any,
    status: string,
    amount: string,
    datetime: any,
  ) => void;
  listViewItems: any;
  highLight: any;
}
const WalletData: React.FC<WalletHeaderProps> = (props: WalletHeaderProps) => {
  const ITEM_SIZE = 58;
  const scrollY = React.useRef(new Animated.Value(0)).current;
  const {openDetailModal, listViewItems, highLight} = props;
  //console.log(listViewItems);
  const renderTranscationView = ({item, index}: any) => {
    const inputRange = [-1, 0, ITEM_SIZE * index, ITEM_SIZE * (index + 2)];
    const scale = scrollY.interpolate({
      inputRange,
      outputRange: [1, 1, 1, 0],
    });
    return (
      <Animated.View
        style={{...styles.walletTransactionWrapper, transform: [{scale}]}}>
        <Pressable
          style={[
            styles.walletTransactionDetail,
            index === highLight ? styles.boxShadow : null,
          ]}
          onPress={() =>
            openDetailModal(index, item.type, item.amount, item.datetime)
          }>
          <View style={{flexDirection: 'row'}}>
            {item.type === 'Sent BTC' ? (
              <IconWithDrawBig height={26} width={26} />
            ) : (
              <IconWithDrwa />
            )}
            <Text style={styles.walletTransactionTextDetail}>
              {' '}
              {item.type === 'Sent BTC' ? 'Sent Bitcoin' : 'Received'} {'\n'}{' '}
              <Text style={{fontFamily: 'Poppins-Regular', fontSize: 12}}>
                Completed
              </Text>
            </Text>
          </View>

          <Text
            style={{
              color: item.type === 'Sent BTC' ? 'red' : '#04CD70',
              fontSize: 14,
              fontWeight: '600',
            }}>
            {item.type === 'Sent BTC' ? '-' : '+'}{' '}
            <Text style={{color: '#495057', fontFamily: 'Poppins-Medium'}}>
              {' '}
              {item.amount}
            </Text>
          </Text>
        </Pressable>
      </Animated.View>
    );
  };
  return (
    <Animated.FlatList
      // onScroll={Animated.event(
      //   [{navtiveEvent: {contentoffset: {y: scrollY}}}],
      //   {useNativeDriver: false},
      // )}
      data={listViewItems}
      renderItem={renderTranscationView}
    />
  );
};

export default WalletData;
