import 'react-native';
import React from 'react';

import {render} from '@testing-library/react-native';

import App from '../App';

it('renders correctly', () => {
  expect(() => render(<App />)).not.toThrowError();
});
