import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {Colors} from '../../utils/color';

interface IButton {
  onPress: () => void;
  label: string;
  disabled?: boolean;
}

const Button = (props: IButton) => {
  const {onPress, label, disabled} = props;

  const buttonStyle = !disabled
    ? styles.button
    : [styles.button, {backgroundColor: Colors.BG.OverlayDark10}];

  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      style={buttonStyle}
      activeOpacity={0.9}>
      <Text style={styles.labelStyle}>{label}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.BGSupport.Primary,
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 24,
    width: '100%',
    alignItems: 'center',
  },
  labelStyle: {
    color: Colors.BG.White,
    fontSize: 18,
    fontWeight: 'bold',
  },
});
