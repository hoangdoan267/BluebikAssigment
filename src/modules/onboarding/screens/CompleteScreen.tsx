import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {Colors} from '../../../utils/color';
import {useSelector} from 'react-redux';
import {RootState} from '../../../store/store';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

export default function CompleteScreen() {
  const userData = useSelector((state: RootState) => state.onboardingUser);

  const {username, dateOfBirth, idCardNumber, phone, email, purpose} = userData;

  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        styles.screenContainer,
        {paddingBottom: insets.bottom ? insets.bottom + 24 : 24},
      ]}>
      <View style={styles.contentContainer}>
        <Text style={styles.headerText}>
          You've successfully registered{' '}
          <Text style={styles.brandNameText}>Bluebik eWallet!</Text>
        </Text>
        <Text style={styles.contentText}>Name:</Text>
        <Text style={[styles.contentText, styles.brandNameText]}>
          {username}
        </Text>
        <Text style={styles.contentText}>Date of birth:</Text>
        <Text style={[styles.contentText, styles.brandNameText]}>
          {dateOfBirth}
        </Text>
        <Text style={styles.contentText}>ID Card No:</Text>
        <Text style={[styles.contentText, styles.brandNameText]}>
          {idCardNumber}
        </Text>
        <Text style={styles.contentText}>Phone:</Text>
        <Text style={[styles.contentText, styles.brandNameText]}>{phone}</Text>
        <Text style={styles.contentText}>Email:</Text>
        <Text style={[styles.contentText, styles.brandNameText]}>{email}</Text>
        <Text style={styles.contentText}>Purpose:</Text>
        <Text style={[styles.contentText, styles.brandNameText]}>
          {purpose?.join(', ')}
        </Text>
      </View>
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
  brandNameText: {
    color: Colors.BGSupport.Primary,
  },
  contentText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.TextBlack.Teritary,
  },
});
