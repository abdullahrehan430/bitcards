/* eslint-disable react-native/no-inline-styles */
import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';
import {IconWithDrawBig, CrossIcon, IconWithDrwa} from '../../../config/svgs';
interface WalletDetailsProps {
  onValueChange: (val: boolean) => void;
  currentStatus: string;
  walletAmount: any;
  dateTime: string;
}
const WalletDetailPopup: React.FC<WalletDetailsProps> = (
  props: WalletDetailsProps,
) => {
  const {onValueChange, currentStatus, walletAmount, dateTime} = props;
  const valueInUsd = (walletAmount * 36543.2).toFixed(2);
  return (
    <View style={styles.container}>
      <View style={styles.crossButtonView}>
        <TouchableOpacity
          style={styles.crossButtonPressStyle}
          onPress={() => onValueChange(false)}>
          <CrossIcon />
        </TouchableOpacity>
        <View style={styles.popUpMainHeader}>
          {currentStatus === 'Sent BTC' ? (
            <IconWithDrawBig />
          ) : (
            <IconWithDrwa height={50} width={50} />
          )}
          <Text style={{color: '#495057'}}>
            {' '}
            {currentStatus === 'Sent BTC' ? 'Send' : 'Received'} Bitcoin {'\n'}{' '}
            <Text style={{fontSize: 18, color: 'black', fontWeight: '600'}}>
              {walletAmount}
              <Text style={{color: 'lightgrey', fontSize: 14}}>
                {' '}
                ≈ {valueInUsd} USD
              </Text>
            </Text>
          </Text>
        </View>
        <View style={{paddingLeft: 22, paddingTop: 19}}>
          <Text style={{color: '#495057', fontWeight: '600'}}>
            Recipient id:
          </Text>
          <Text style={{color: 'black'}}>9713e3940bcc5</Text>
        </View>
        <View style={{paddingLeft: 22, paddingTop: 13}}>
          <Text style={{color: '#495057', fontWeight: '600'}}>
            Transaction id:
          </Text>
          <Text style={{color: 'black'}}>9713e3940bcc50479a0ae000f52</Text>
        </View>
        <View style={{paddingLeft: 22, paddingTop: 13}}>
          <Text style={{color: '#495057', fontWeight: '600'}}>Status:</Text>
          <Text style={{color: 'black'}}>Completed on {dateTime}</Text>
        </View>
        <TouchableOpacity style={styles.btnContinueView}>
          <Text style={styles.btnContunueText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default WalletDetailPopup;
