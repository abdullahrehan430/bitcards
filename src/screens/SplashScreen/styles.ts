import {ViewStyle, TextStyle, StyleSheet} from 'react-native';
interface LoginStyles {
  container: ViewStyle;
  imageWrapper: ViewStyle;
  logoImage: ViewStyle;
  contentContainer: ViewStyle;
  inputField: ViewStyle;
  forgotPassword: ViewStyle;
  buttonMain: ViewStyle;
  buttonText: TextStyle;
  textContainer: ViewStyle;
  textContent: TextStyle;
  textSignUp: TextStyle;
  dividerText: TextStyle;
  facebookText: TextStyle;
  facebookLogin: ViewStyle;
}
const LoginStyles = StyleSheet.create<LoginStyles>({
  container: {
    flex: 1,
    backgroundColor: '#F7F7F7',
  },
  imageWrapper: {
    flex: 1,
    justifyContent: 'center',
    //alignItems: 'center',
    // flex: 0.4,
    paddingBottom: 25,
  },
  logoImage: {
    alignSelf: 'center',
    justifyContent: 'center',
  },
  contentContainer: {
    flex: 0.7,
    paddingLeft: 25,
    paddingRight: 25,
  },
  inputField: {
    backgroundColor: '#ffffff',
    height: 55,
    marginLeft: 30,
    marginRight: 30,
    marginBottom: 10,
    borderLeftColor: '#4051B5',
    borderLeftWidth: 5,
    paddingLeft: 15,
  },
  forgotPassword: {
    marginLeft: 30,
    marginRight: 45,
    marginTop: 20,
    marginBottom: 20,
    alignSelf: 'flex-end',
  },
  buttonMain: {
    marginLeft: 30,
    marginRight: 30,
    marginBottom: 10,
    alignItems: 'center',
    backgroundColor: '#FFF217',
    height: 50,
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  textContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
  },
  textContent: {
    fontSize: 14,
  },
  textSignUp: {
    textDecorationLine: 'underline',
    color: 'blue',
    fontSize: 14,
  },
  dividerText: {
    marginLeft: 30,
    marginRight: 30,
    marginTop: 15,
    fontSize: 16,
    opacity: 0.8,
    color: '#C4C4C4',
  },
  facebookText: {
    fontSize: 14,
    paddingLeft: 4,
  },
  facebookLogin: {
    marginLeft: 30,
    marginRight: 30,
    marginTop: 15,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: 'white',
    height: 45,
  },
});
export default LoginStyles;
