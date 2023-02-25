import React from 'react';

import {measurePerformance} from 'reassure';

import {HomeScreen} from './home-screen';

test('Measure Home screen performance', async () => {
  await measurePerformance(<HomeScreen />);
}, 30000);
