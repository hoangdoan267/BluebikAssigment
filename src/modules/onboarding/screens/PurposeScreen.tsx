import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import Button from '../../../components/Button/Button';
import {Colors} from '../../../utils/color';
import CheckBoxButton from '../../../components/CheckboxButton/CheckBoxButton';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../../store/store';
import {update} from '../../../store/slices/onboardingUserSlice';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../navigations/RootNavigation';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const purposeList = [
  'Money transfer',
  'Payment',
  'Bill payment',
  'Loan',
  'Investment',
  'Saving',
];
type Props = NativeStackScreenProps<RootStackParamList, 'purpose'>;

export default function PurposeScreen({navigation}: Props) {
  const insets = useSafeAreaInsets();
  const dispatch = useDispatch();
  const configScreen = useSelector((state: RootState) => state.config.value);

  const [purpose, setPurpose] = useState<string[]>([]);

  const isLastScreen = configScreen === 'information';

  const onNextStep = () => {
    dispatch(update({purpose}));

    if (isLastScreen) {
      navigation.navigate('complete');
    } else {
      navigation.navigate('information');
    }
  };

  const onPressCheckBox = (value: string) => {
    let newPurpose: string[] = [...purpose];
    if (newPurpose.includes(value)) {
      newPurpose = newPurpose.filter(el => el !== value);
    } else {
      newPurpose = [...newPurpose, value];
    }
    setPurpose(newPurpose);
  };

  const renderPurpose = () => {
    return purposeList.map(el => {
      return (
        <CheckBoxButton
          key={el}
          onPress={onPressCheckBox}
          label={el}
          value={el}
          isChosen={purpose.includes(el)}
        />
      );
    });
  };

  return (
    <View
      style={[
        styles.screenContainer,
        {paddingBottom: insets.bottom ? insets.bottom + 24 : 24},
      ]}>
      <View style={styles.contentContainer}>
        <Text style={styles.headerText}>
          What are you looking for in Bluebik eWallet?
        </Text>
        <View>{renderPurpose()}</View>
      </View>

      <Button
        disabled={purpose.length === 0}
        label="Next"
        onPress={onNextStep}
      />
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
    paddingVertical: 60,
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 36,
    fontWeight: 'bold',
    color: Colors.TextBlack.Primary,
    marginBottom: 24,
  },
});
