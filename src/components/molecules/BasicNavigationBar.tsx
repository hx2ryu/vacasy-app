import {ICONS} from '@/constants/theme';
import {
  NativeStackHeaderProps,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import React, {useCallback} from 'react';
import {
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';

interface Props extends NativeStackHeaderProps {
  style: ViewStyle;
}
const BasicNavigationBar: React.FC<Props> = ({style, navigation}) => {
  const onNavigate = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  return (
    <View style={[styles.root, style]}>
      <TouchableOpacity>
        {/* <Image source={ICONS.leftArrow} /> */}
      </TouchableOpacity>

      <TouchableOpacity onPress={onNavigate}>
        <Image source={ICONS.close} style={{tintColor: 'white'}} />
      </TouchableOpacity>
    </View>
  );
};

export default BasicNavigationBar;

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
  },
});
