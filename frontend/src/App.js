import React from 'react';

import configureApp from './lib/app-config';

import Navigation from './navigation/AppNavigator';

configureApp();

const Root = () => {
  return <Navigation />;
};

export default Root;
