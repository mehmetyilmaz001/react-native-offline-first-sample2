import RNFirebase from 'react-native-firebase';

const configurationOptions = {
  persistence: true,
  debug: true
};

const firebase = RNFirebase.initializeApp(configurationOptions);

export default firebase;