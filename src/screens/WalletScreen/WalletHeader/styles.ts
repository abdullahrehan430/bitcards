import {StyleSheet, TextStyle, ViewStyle} from 'react-native';

interface HeaderStyles {
  headerTop: ViewStyle;
  headerMid: ViewStyle;
  headerMidText: TextStyle;
  container: ViewStyle;
  tabWrapper: ViewStyle;
  overViewTab: ViewStyle;
  overViewTabText: TextStyle;
  bottomLine: ViewStyle;
  walletTabStyle: ViewStyle;
  walletTabText: TextStyle;
}

const HeaderStyles = StyleSheet.create<HeaderStyles>({
  walletTabText: {
    // color: '#495057',
    //  fontWeight: '600',
    marginBottom: 1,
    fontFamily: 'Poppins-Medium',
  },
  walletTabStyle: {
    width: '50%',
    alignItems: 'center',
    paddingTop: 15,
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
    // marginTop: 40,
    backgroundColor: 'white',
  },
  overViewTab: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    width: '50%',
    paddingTop: 15,
  },
  headerTop: {
    backgroundColor: 'white',
  },
  headerMid: {
    //  backgroundColor: 'yellow',
  },
  headerMidText: {
    fontFamily: 'Poppins-Bold',
    color: '#000',
    fontSize: 28,
    //fontWeight: '700',
    marginLeft: 18,
  },
});

export default HeaderStyles;
