/* eslint-disable react-native/no-color-literals */
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  StyleSheet,
} from 'react-native';
import {useTranslation} from '../../../global/services/i18n/i18n-provider';

export function HomeScreen(): JSX.Element {
  const {t} = useTranslation();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        contentContainerStyle={styles.container}>
        <Text style={styles.text}>{t('welcome')}</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  // eslint-disable-next-line react-native/no-color-literals
  container: {
    alignItems: 'center',
    backgroundColor: '#FFF',
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    color: '#000',
    fontSize: 16,
  },
});
