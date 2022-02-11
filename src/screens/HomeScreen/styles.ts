import {StyleSheet, TextStyle, ViewStyle} from 'react-native';

interface HomeStytlesProps {
  inputStyles: ViewStyle;
  pushBtn: TextStyle;
}
const styles = StyleSheet.create<HomeStytlesProps>({
  inputStyles: {
    backgroundColor: '#ffffff',
    //height: 55,
    marginLeft: 30,
    marginRight: 30,
    marginBottom: 10,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderLeftColor: '#04CD70',
    borderLeftWidth: 5,
    paddingLeft: 15,
  },
  pushBtn: {
    width: '85%',
    backgroundColor: '#04CD70',
    marginLeft: 30,
    paddingTop: 10,
    marginRight: 30,
    paddingBottom: 10,
    alignItems: 'center',
    marginTop: 5,
  },
});

export default styles;
