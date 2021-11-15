import {COLORS, ICONS} from '@/constants/theme';
import React from 'react';
import {View, StyleSheet, Image, ViewProps} from 'react-native';
import {Button} from '../atoms';

interface Props extends ViewProps {
  onPressSearchButton: () => void;
}
const MainMenuBox: React.FC<Props> = ({onPressSearchButton, style}) => {
  return (
    <View style={[styles.root, style]}>
      <Button style={styles.button} onPress={onPressSearchButton}>
        <Image source={ICONS.search} style={styles.buttonIcon} />
      </Button>
    </View>
  );
};

export default MainMenuBox;

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
  },
  button: {
    padding: 10,
    backgroundColor: COLORS.grayscale[700],
    borderRadius: 20,
  },
  buttonIcon: {
    tintColor: COLORS.primary,
  },
});
