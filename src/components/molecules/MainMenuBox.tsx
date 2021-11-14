import {COLORS, ICONS} from '@/constants/theme';
import React from 'react';
import {View, StyleSheet, Image, ViewProps} from 'react-native';
import {Button} from '../atoms';

const MainMenuBox: React.FC<ViewProps> = ({style}) => {
  return (
    <View style={[styles.bottomMenu, style]}>
      <Button
        style={styles.button}
        onPress={() => {
          //   setShowSearchBox(flag => !flag);
        }}>
        <Image source={ICONS.plus} style={styles.buttonIcon} />
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  bottomMenu: {
    flexDirection: 'row',
  },
  button: {
    padding: 5,
    backgroundColor: COLORS.grayscale[500],
    borderRadius: 20,
  },
  buttonIcon: {
    tintColor: COLORS.primary,
  },
});

export default MainMenuBox;
