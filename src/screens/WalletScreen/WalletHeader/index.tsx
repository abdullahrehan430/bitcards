import {View, Text, TouchableOpacity, Pressable} from 'react-native';
import React from 'react';
import {BackIcon} from '../../../config/svgs';
import HeaderStyles from './styles';
interface WalletHeaderProps {
  showOverViewTab: () => void;
  showWalletTab: () => void;
  onPressBack: () => void;
  showOverView: boolean;
  showWallte: boolean;
}
const WalletHeader: React.FC<WalletHeaderProps> = (
  props: WalletHeaderProps,
) => {
  const {
    showOverViewTab,
    showWalletTab,
    showWallte,
    showOverView,
    onPressBack,
  } = props;
  const selectedTextColor = '#0463D3';
  const notselectedTextColor = '#495057';
  return (
    <View>
      <View style={HeaderStyles.headerTop}>
        <Pressable onPress={onPressBack}>
          <BackIcon />
        </Pressable>
        <View style={HeaderStyles.headerMid}>
          <Text style={HeaderStyles.headerMidText}>Wallet Overview</Text>
        </View>
      </View>
      <View style={HeaderStyles.tabWrapper}>
        <TouchableOpacity
          style={HeaderStyles.overViewTab}
          onPress={showOverViewTab}>
          <Text
            style={{
              ...HeaderStyles.overViewTabText,
              color: showOverView ? selectedTextColor : notselectedTextColor,
            }}>
            Overview
          </Text>
          {showOverView ? <View style={HeaderStyles.bottomLine} /> : <></>}
        </TouchableOpacity>
        <TouchableOpacity
          style={HeaderStyles.walletTabStyle}
          onPress={showWalletTab}>
          <Text
            style={{
              ...HeaderStyles.walletTabText,
              color: !showOverView ? selectedTextColor : notselectedTextColor,
            }}>
            Wallet
          </Text>
          {showWallte ? <View style={HeaderStyles.bottomLine} /> : <></>}
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default WalletHeader;
