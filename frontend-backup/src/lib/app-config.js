import asyncStorage from './async-storage';

export default async () => {
  console.disableYellowBox = true;

  // reset async-storage
  // await asyncStorage.clearAll();
};
