import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import DatePicker from 'react-native-date-picker';

import Button from '../../../components/Button/Button';
import {Colors} from '../../../utils/color';
import moment from 'moment';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../../store/store';
import {update} from '../../../store/slices/onboardingUserSlice';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../navigations/RootNavigation';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

type Props = NativeStackScreenProps<RootStackParamList, 'information'>;

export default function InformationScreen({navigation}: Props) {
  const dispatch = useDispatch();
  const configScreen = useSelector((state: RootState) => state.config.value);
  const insets = useSafeAreaInsets();

  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [dateOfBirth, setDateOfBirth] = useState<string>('');
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const onChangeEmail = (text: string) => {
    setEmail(text);
  };

  const isLastScreen = configScreen === 'information';

  const onNextStep = () => {
    dispatch(update({email, phone, dateOfBirth}));

    if (isLastScreen) {
      navigation.navigate('purpose');
    } else {
      navigation.navigate('complete');
    }
  };

  return (
    <View
      style={[
        styles.screenContainer,
        {paddingBottom: insets.bottom ? insets.bottom + 24 : 24},
      ]}>
      <View style={styles.contentContainer}>
        <Text style={styles.headerText}>Please tell us more about you!</Text>
        <TextInput
          placeholder="Email"
          placeholderTextColor={Colors.TextBlack.Teritary}
          style={styles.textInput}
          autoCorrect={false}
          autoCapitalize={'none'}
          value={email}
          onChangeText={onChangeEmail}
          keyboardType="email-address"
        />

        <TextInput
          placeholder="Phone number"
          placeholderTextColor={Colors.TextBlack.Teritary}
          style={styles.textInput}
          autoCorrect={false}
          value={phone}
          onChangeText={setPhone}
          keyboardType="number-pad"
        />
        <TouchableOpacity
          onPress={() => {
            setIsOpen(true);
          }}>
          <Text
            style={[
              styles.textInput,
              {
                color: !dateOfBirth
                  ? Colors.TextBlack.Teritary
                  : Colors.BGSupport.Primary,
              },
            ]}>
            {!dateOfBirth ? 'Date of Birth' : dateOfBirth}
          </Text>
        </TouchableOpacity>
      </View>

      <Button
        disabled={!email || !phone || !dateOfBirth}
        label="Next"
        onPress={onNextStep}
      />
      <DatePicker
        modal
        mode="date"
        open={isOpen}
        date={new Date()}
        onConfirm={date => {
          setIsOpen(false);
          setDateOfBirth(moment(date).format('DD/MM/YYYY'));
        }}
        onCancel={() => {
          setIsOpen(false);
        }}
        title={'Choose your date of birth'}
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
  inputGroup: {},

  contentText: {
    fontSize: 36,
    fontWeight: 'bold',
    color: Colors.TextBlack.Primary,
  },
  textInput: {
    fontSize: 24,
    color: Colors.BGSupport.Primary,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  brandNameText: {
    color: Colors.BGSupport.Primary,
  },
});
