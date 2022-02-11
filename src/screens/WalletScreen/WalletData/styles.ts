import {StyleSheet, TextStyle, ViewStyle} from 'react-native';

interface WalletScreenProps {
  container: ViewStyle;
  tabWrapper: ViewStyle;
  overViewTab: ViewStyle;
  overViewTabText: TextStyle;
  bottomLine: ViewStyle;
  walletTabStyle: ViewStyle;
  walletTabText: TextStyle;
  bitCoinPriceWrapper: ViewStyle;
  priceViewWrapper: ViewStyle;
  priceBoxViewStyle: ViewStyle;
  priceBoxTextSyle: ViewStyle;
  priceViewTextStyle: TextStyle;
  priceBoxFlatlist: ViewStyle;
  chartDataView: ViewStyle;
  chartTypeWrapper: ViewStyle;
  chartTypeText: TextStyle;
  walletTransactionDetail: ViewStyle;
  walletTransactionWrapper: ViewStyle;
  walletTransactionTextDetail: TextStyle;
  boxWithShadowColor: ViewStyle;
  boxShadow: ViewStyle;
}

const styles = StyleSheet.create<WalletScreenProps>({
  boxShadow: {
    borderRadius: 5,
    borderColor: 'rgba(245, 245, 245, 0.51)',
    borderWidth: 0.5,
    // overflow: 'hidden',
    // shadowColor: '#000',
    shadowOffset: {
      height: 5,
      width: 0,
    },
    shadowOpacity: 0.3,

    shadowRadius: 4.65,
    elevation: 8,
  },
  boxWithShadowColor: {
    //  shadowColor: 'white',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 6,
  },
  walletTransactionTextDetail: {
    fontFamily: 'Poppins-Medium',
    marginLeft: 6,
    color: '#495057',
    fontWeight: '600',
    fontSize: 12,
  },
  walletTransactionWrapper: {
    // paddingTop: 13,
    paddingBottom: 13,
    backgroundColor: 'white',
    paddingLeft: 22,
    paddingRight: 19,
  },
  walletTransactionDetail: {
    backgroundColor: 'white',
    flex: 1,
    flexDirection: 'row',
    borderWidth: 2,
    borderColor: 'rgba(245, 245, 245, 0.51)',
    borderRadius: 10,
    paddingLeft: 15,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingRight: 15,
    paddingTop: 18,
    paddingBottom: 10,
  },
  chartTypeText: {
    color: '#000000',
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
  },
  chartTypeWrapper: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    backgroundColor: 'white',
  },
  chartDataView: {
    backgroundColor: '#D8D8D8',
    width: 30,
    height: 30,
    marginRight: 18,
    marginTop: 28,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    // paddingTop: 6,
    // paddingBottom: 6,
    // paddingLeft: 9,
    // paddingRight: 9,
  },
  priceBoxFlatlist: {
    paddingLeft: 10,
    paddingTop: 30,
    backgroundColor: 'white',
    paddingRight: 5,
  },
  priceViewTextStyle: {
    color: '#495057',
    fontSize: 20,
    fontWeight: '600',
    fontFamily: 'Poppins-Medium',
  },
  priceBoxTextSyle: {
    color: '#495057',
    fontWeight: 'bold',
  },
  priceBoxViewStyle: {
    paddingTop: 33,
    paddingLeft: 8,
    paddingRight: 10,
  },
  priceViewWrapper: {
    marginTop: 7,
    paddingLeft: 24,
    backgroundColor: 'white',
    paddingTop: 28,
  },

  bitCoinPriceWrapper: {
    borderWidth: 1,
    // width: '35%',
    borderRadius: 10,
    paddingTop: 11,
    // marginTop: 33,
    backgroundColor: 'white',
    // backgroundColor: 'white',
    marginLeft: 10,
    paddingBottom: 11,
    borderColor: 'rgba(239, 239, 239, 0.69)',
  },
  walletTabText: {
    // color: '#495057',
    //  fontWeight: '600',
    marginBottom: 1,
    fontFamily: 'Poppins-Medium',
  },
  walletTabStyle: {
    width: '50%',
    alignItems: 'center',
    paddingTop: 20,
  },
  bottomLine: {
    borderBottomColor: '#0463D3',
    borderBottomWidth: 2,
    width: 150,
  },
  overViewTabText: {
    //  color: '#0463D3',
    //fontWeight: '600',
    alignItems: 'center',
    fontSize: 13,
    fontFamily: 'Poppins-Medium',
    marginBottom: 1,
  },
  container: {
    backgroundColor: '#FAFAFB',
    flex: 1,
  },
  tabWrapper: {
    flexDirection: 'row',
    marginTop: 40,
    paddingTop: 10,
    backgroundColor: 'white',
  },
  overViewTab: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    width: '50%',
    paddingTop: 20,
  },
});

export default styles;
