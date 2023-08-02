import {View, Text, StyleSheet, TextInput} from 'react-native';
import React, {useState} from 'react';
import Button from '../../../components/Button/Button';
import {Colors} from '../../../utils/color';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../../store/store';
import {update} from '../../../store/slices/onboardingUserSlice';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../navigations/RootNavigation';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

type Props = NativeStackScreenProps<RootStackParamList, 'idCard'>;

export default function IDCardScreen({navigation}: Props) {
  const insets = useSafeAreaInsets();
  const dispatch = useDispatch();
  const configScreen = useSelector((state: RootState) => state.config.value);

  const [idCardNumber, setIdCardNumber] = useState<string>('');

  const onChangeIdCard = (text: string) => {
    setIdCardNumber(text);
  };

  const isLastScreen = configScreen === 'information';

  const onNextStep = () => {
    dispatch(update({idCardNumber}));

    if (isLastScreen) {
      navigation.navigate('information');
    } else {
      navigation.navigate('purpose');
    }
  };

  return (
    <View
      style={[
        styles.screenContainer,
        {paddingBottom: insets.bottom ? insets.bottom + 24 : 24},
      ]}>
      <View style={styles.contentContainer}>
        <View style={styles.inputGroup}>
          <Text style={[styles.headerText, styles.brandNameText]}>Oops!!!</Text>
          <Text style={styles.subHeaderText}>Don't forget your</Text>
          <TextInput
            placeholder="ID Card Number"
            placeholderTextColor={Colors.TextBlack.Teritary}
            style={styles.textInput}
            autoCorrect={false}
            value={idCardNumber}
            onChangeText={onChangeIdCard}
            keyboardType="number-pad"
          />
        </View>
      </View>

      <Button disabled={!idCardNumber} label="Continue" onPress={onNextStep} />
    </View>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 24,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 48,
    fontWeight: 'bold',
    color: Colors.TextBlack.Primary,
  },
  subHeaderText: {
    fontSize: 36,
    fontWeight: 'bold',
    color: Colors.TextBlack.Primary,
  },
  inputGroup: {
    marginBottom: 24,
  },

  textInput: {
    fontSize: 36,
    color: Colors.TextBlack.Teritary,
    fontWeight: 'bold',
  },
  brandNameText: {
    color: Colors.BGSupport.Primary,
  },
});
