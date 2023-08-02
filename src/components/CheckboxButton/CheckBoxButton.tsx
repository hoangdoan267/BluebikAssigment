import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import {Colors} from '../../utils/color';

interface ICheckboxButton {
  label: string;
  value: string;
  isChosen: boolean;
  onPress: (value: string) => void;
}

const CheckBoxButton = (props: ICheckboxButton) => {
  const {label, isChosen, onPress, value} = props;

  const onPressCheckbox = () => {
    onPress(value);
  };

  return (
    <TouchableOpacity
      testID="chooseButton"
      style={styles.container}
      onPress={onPressCheckbox}
      activeOpacity={0.9}>
      <View
        style={[
          styles.outerBox,
          {
            borderColor: isChosen
              ? Colors.BGSupport.Primary
              : Colors.TextBlack.Teritary,
          },
        ]}>
        {isChosen && <View style={styles.innerBox} />}
      </View>
      <Text
        style={[
          styles.label,
          {
            color: isChosen
              ? Colors.BGSupport.Primary
              : Colors.TextBlack.Teritary,
          },
        ]}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default CheckBoxButton;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    marginBottom: 8,
  },
  label: {
    fontSize: 18,
    color: Colors.TextBlack.Teritary,
    fontWeight: 'bold',
  },
  outerBox: {
    width: 18,
    height: 18,
    borderRadius: 4,
    borderWidth: 1,
    marginRight: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerBox: {
    width: 10,
    height: 10,
    borderRadius: 2,
    backgroundColor: Colors.BGSupport.Primary,
  },
});
