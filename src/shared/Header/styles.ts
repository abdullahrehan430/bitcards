import {StyleSheet, TextStyle, ViewStyle} from 'react-native';

interface HeaderStyles {
  headerWrapper: ViewStyle;
  headerText: TextStyle;
}

const HeaderStyles = StyleSheet.create<HeaderStyles>({
  headerText: {
    color: 'black',
    marginLeft: 20,
    fontSize: 18,
    fontFamily: 'Poppins-Bold',
  },
  headerWrapper: {
    paddingTop: 20,
    paddingBottom: 20,
    backgroundColor: 'white',
  },
});

export default HeaderStyles;
