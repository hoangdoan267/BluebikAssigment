import * as React from 'react';
import CheckBoxButton from '../src/components/CheckboxButton/CheckBoxButton';
import {act, fireEvent, render} from '@testing-library/react-native';

describe('CheckBoxButton suites', () => {
  const onPress = jest.fn();
  test('it render isChosen = true correctly', () => {
    const button = render(
      <CheckBoxButton
        label="default checkbox"
        value="default"
        isChosen
        onPress={onPress}
      />,
    ).toJSON();
    expect(button).toMatchSnapshot();
  });
  test('it render isChosen = false correctly', () => {
    const button = render(
      <CheckBoxButton
        label="default checkbox"
        value="default"
        isChosen={false}
        onPress={onPress}
      />,
    ).toJSON();
    expect(button).toMatchSnapshot();
  });
  test('it onPress called', async () => {
    const button = render(
      <CheckBoxButton
        label="default checkbox"
        value="default"
        isChosen={false}
        onPress={onPress}
      />,
    );
    const onClickButton = button.getByTestId('chooseButton');
    await act(() => {
      fireEvent.press(onClickButton);
    });
    expect(onPress).toBeCalled();
  });
});
