import {View, Text, StyleSheet, TextInput} from 'react-native';
import React, {useState} from 'react';
import Button from '../../../components/Button/Button';
import {Colors} from '../../../utils/color';
import {update} from '../../../store/slices/onboardingUserSlice';
import {useDispatch} from 'react-redux';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../navigations/RootNavigation';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

type Props = NativeStackScreenProps<RootStackParamList, 'onboarding'>;

export default function OnboardingScreen({navigation}: Props) {
  const dispatch = useDispatch();
  const insets = useSafeAreaInsets();

  const [username, setUsername] = useState<string>('');

  const onChangeUserName = (text: string) => {
    setUsername(text);
  };

  const onNextStep = () => {
    dispatch(update({username}));
    navigation.navigate('idCard');
  };

  return (
    <View
      style={[
        styles.screenContainer,
        {paddingBottom: insets.bottom ? insets.bottom + 24 : 24},
      ]}>
      <View style={styles.contentContainer}>
        <View style={styles.inputGroup}>
          <Text style={styles.headerText}>Welcome</Text>
          <TextInput
            placeholder="your name"
            placeholderTextColor={Colors.TextBlack.Teritary}
            style={styles.textInput}
            autoCorrect={false}
            value={username}
            onChangeText={onChangeUserName}
          />
          <Text style={styles.contentText}>
            to <Text style={styles.brandNameText}>Bluebik eWallet!</Text>
          </Text>
        </View>
      </View>

      <Button disabled={!username} label="Next" onPress={onNextStep} />
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
  inputGroup: {
    marginBottom: 24,
  },
  contentText: {
    fontSize: 36,
    fontWeight: 'bold',
    color: Colors.TextBlack.Primary,
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
