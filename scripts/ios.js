import {execSync} from 'child_process';

import {loadEnvFile, setupEnv} from './common';

/**
 * @param {*} deviceName string
 */
const bootDevice = deviceName => {
  /**
   * iPhone 8 (2292DF56-3D4D-4328-90CF-C804E8A1A7F5) (Shutdown)
   * iPhone 14 (7590DD1E-D039-4545-ADB1-586F2471D873) (Booted)
   * iPhone 14 Pro (24C004AB-A617-4168-B0F2-37FD9223A1C0) (Booted)
   */
  try {
    // if simulator is not booted, it will throw an error
    execSync(
      `xcrun simctl list devices | grep "${deviceName}" | grep "Booted"`,
    );
  } catch {
    execSync(`xcrun simctl boot "${deviceName}"`);
  }

  return execSync(
    `xcrun simctl list devices | grep "${deviceName}" | grep "Booted" | grep -E -o -i "([0-9a-f]{8}-([0-9a-f]{4}-){3}[0-9a-f]{12})"`,
  ).toString();
};

/**
 *
 * @param {*} bundleId string
 */
const uninstallOldApp = bundleId => {
  // uninstall app using xcrun
  execSync(`xcrun simctl uninstall booted "${bundleId}"`);
};

/**
 * @param {*} props.platform NodeJS.Platform
 * @param {*} props.envPath string
 */
const run = props => {
  if (props.platform !== 'darwin') {
    console.log('This script is only for macOS');

    return;
  }

  const envJson = loadEnvFile(props.envPath);

  setupEnv(props.envPath, envJson);

  // const simulator = 'iPhone 14';

  // const udid = bootDevice(simulator);

  // uninstallOldApp(envJson.BUNDLE_IDENTIFIER_IOS);

  execSync(
    `npx react-native run-ios --scheme ${envJson.APP_PLACEHOLDER_NAME}`,
    {stdio: 'inherit'},
  );

  // execSync(
  //   `npx react-native run-ios --scheme ${envJson.APP_PLACEHOLDER_NAME}-${envJson.APP_ENV}`,
  //   { stdio: 'inherit' },
  // );
};

/**
 * @param {*} envPath NodeJS.Platform
 * @param {*} envPath string
 */
const pushNotification = ({envPath, platform}) => {
  if (platform !== 'darwin') {
    console.log('This script is only for macOS');

    return;
  }

  const envJson = loadEnvFile(envPath);

  const simulator = 'iPhone 14';

  const deviceId = bootDevice(simulator);

  execSync(
    `xcrun simctl push ${deviceId} ${envJson.BUNDLE_IDENTIFIER_IOS} notification-ios-config.apns`,
    {stdio: 'inherit'},
  );
};

(() => {
  const {argv, platform} = process;

  const actualArgv = argv.slice(2);

  const [nameFunc, envPath] = actualArgv;

  switch (nameFunc) {
    case 'run':
      run({platform, envPath});

      break;
    case 'push-notification':
      pushNotification({platform, envPath});

      break;

    default:
      break;
  }
})();
