jest.mock(
  'react-native/Libraries/Components/StatusBar/StatusBar',
  () => 'StatusBar',
);

jest.mock(
  'react-native-localize',
  () => require('react-native-localize/mock').default,
);
