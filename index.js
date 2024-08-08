import {AppRegistry, Text, TextInput} from 'react-native';
import 'react-native-gesture-handler';

import {DISABLE_TEXT_SCALING} from '@env';
import MyApp from './App';
import {name as appName} from './app.json';
import './declare';

// Disable font scaling
if (Number(DISABLE_TEXT_SCALING)) {
  Text.defaultProps = Text.defaultProps || {};
  Text.defaultProps.allowFontScaling = false;
  TextInput.defaultProps = TextInput.defaultProps || {};
  TextInput.defaultProps.allowFontScaling = false;
}

AppRegistry.registerComponent(appName, () => MyApp);
