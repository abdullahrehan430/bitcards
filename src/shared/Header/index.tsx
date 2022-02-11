import {View, Text} from 'react-native';
import React from 'react';
import HeaderStyles from './styles';
interface HeaderProps {
  page: string;
}
const Header: React.FC<HeaderProps> = (props: HeaderProps) => {
  const {page} = props;
  return (
    <View style={HeaderStyles.headerWrapper}>
      <Text style={HeaderStyles.headerText}>{page}</Text>
    </View>
  );
};

export default Header;
