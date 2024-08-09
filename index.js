import {AppRegistry, Text, TextInput} from 'react-native';

import MyApp from './App';
import {name as appName} from './app.json';
import './declare';

// Disable font scaling

Text.defaultProps = Text.defaultProps || {};
Text.defaultProps.allowFontScaling = false;
TextInput.defaultProps = TextInput.defaultProps || {};
TextInput.defaultProps.allowFontScaling = false;

AppRegistry.registerComponent(appName, () => MyApp);
