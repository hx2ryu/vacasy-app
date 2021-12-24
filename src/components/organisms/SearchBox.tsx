import {useAnimateToShowUp, useInput} from '@/hooks';
import {COLORS, ICONS} from '@/theme';
import React from 'react';
import {
  Animated,
  Image,
  Pressable,
  StyleProp,
  StyleSheet,
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import {Text} from '../atoms';

interface Props extends TextInputProps {
  clearButtonVisible: boolean;
  onClearText: () => void;
  onPressCancel: () => void;
  style?: StyleProp<ViewStyle>;
}
const SearchBox: React.FC<Props> = ({
  style,
  value,
  clearButtonVisible,
  onClearText,
  onChangeText,
  onPressCancel,
}) => {
  const {pos} = useAnimateToShowUp('from-right');

  return (
    <View style={[styles.rowDirection, styles.root, style]}>
      <View style={[styles.rowDirection, styles.inputWrapper]}>
        <View style={styles.rowDirection}>
          <Image source={ICONS.search} style={styles.icon} />
          <TextInput
            autoFocus
            style={styles.textInput}
            value={value}
            onChangeText={onChangeText}
          />
        </View>
        {clearButtonVisible && (
          <Pressable onPress={onClearText}>
            <Image source={ICONS.cancel} style={styles.icon} />
          </Pressable>
        )}
      </View>

      <Animated.View style={{right: pos}}>
        <TouchableOpacity onPress={onPressCancel}>
          <Text type={'h4'} style={styles.cancelText}>
            Cancel
          </Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};

export default SearchBox;

const styles = StyleSheet.create({
  root: {
    justifyContent: 'space-between',
  },
  inputWrapper: {
    justifyContent: 'space-between',
    backgroundColor: COLORS.black[500],
    borderRadius: 10,
    width: '80%',
    padding: 16,
  },
  rowDirection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    tintColor: COLORS.white[1000],
  },
  textInput: {
    width: '85%',
    marginLeft: 5,
    color: COLORS.white[1000],
  },
  cancelText: {
    color: COLORS.white[800],
  },
});
