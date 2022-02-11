import {StyleSheet, TextStyle, ViewStyle} from 'react-native';

interface WalletDetailsProps {
  container: ViewStyle;
  crossButtonView: ViewStyle;
  crossButtonPressStyle: ViewStyle;
  popUpMainHeader: ViewStyle;
  btnContinueView: ViewStyle;
  btnContunueText: TextStyle;
}

const styles = StyleSheet.create<WalletDetailsProps>({
  btnContunueText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 16,
    textAlign: 'center',
  },
  btnContinueView: {
    width: '90%',
    height: 52,
    backgroundColor: '#04CD70',
    marginLeft: 20,
    marginTop: 17,
    justifyContent: 'center',
    marginBottom: 36,
  },
  popUpMainHeader: {flexDirection: 'row', marginLeft: 15},
  crossButtonPressStyle: {
    backgroundColor: 'white',
    alignSelf: 'flex-end',
    borderTopRightRadius: 30,
    paddingRight: 18,
    paddingTop: 27,
  },
  crossButtonView: {
    backgroundColor: 'white',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    // borderRadius: 5,
  },
  container: {
    flex: 1,
    // borderTopLeftRadius: 10,
    //borderTopRightRadius: 10,
    // justifyContent: '',
    // backgroundColor: '#F5F4FA',
    backgroundColor: 'rgba(0, 0, 0, 0.22)',
    justifyContent: 'flex-end',
  },
});

export default styles;
