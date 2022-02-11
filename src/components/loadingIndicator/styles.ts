import {StyleSheet, TextStyle, ViewStyle} from 'react-native';

interface Styles {
  container: ViewStyle;
  titleText: TextStyle;
  textStyle: TextStyle;
  buttonStyle: ViewStyle;
  buttonTextStyle: TextStyle;
  ImageViewStyle: ViewStyle;
}

const Loadingstyles = StyleSheet.create<Styles>({
  ImageViewStyle: {
    width: 50,
    height: 50,
  },
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#C2C2C2',
    // backgroundColor: 'rgba(0, 0, 0, 0.1)',
  },
  titleText: {
    fontSize: 22,
    textAlign: 'center',
    fontWeight: 'bold',
    padding: 20,
  },
  textStyle: {
    textAlign: 'center',
    marginTop: 10,
  },
  buttonStyle: {
    fontSize: 16,
    color: 'white',
    backgroundColor: 'green',
    padding: 5,
    marginTop: 32,
    minWidth: 250,
  },
  buttonTextStyle: {
    padding: 5,
    color: 'white',
    textAlign: 'center',
  },
});

export default Loadingstyles;
