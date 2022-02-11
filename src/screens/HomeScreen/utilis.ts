import {ParamListBase} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

type HomeNavigationProp = StackNavigationProp<ParamListBase, 'Dashboard'>;
export interface HomeProps {
  route: any;
  navigation: HomeNavigationProp;
}
