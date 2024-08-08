import {execSync} from 'child_process';
import {existsSync, readdirSync} from 'fs';
import {join} from 'path';
import {createInterface} from 'readline';

import {loadEnvFile, setupEnv} from './common';

/**
 * @param props.platform NodeJS.Platform
 * @param props.variant string
 * @param props.envPath string
 */
const run = props => {
  const envJson = loadEnvFile(props.envPath);

  setupEnv(props.envPath, envJson);

  // uninstall android app with adb
  const devicesString = execSync('adb devices').toString().trim();

  if (devicesString.split('\n').length > 1) {
    try {
      execSync(`adb uninstall ${envJson.BUNDLE_IDENTIFIER_ANDROID}`);
    } catch (e) {
      console.log('Old App not found');
    }
  }

  if (props.platform === 'darwin') {
    execSync(
      `cd android && ENVFILE=${props.envPath} ./gradlew clean && cd .. && npx react-native run-android --mode=${props.variant} --appId=${envJson.BUNDLE_IDENTIFIER_ANDROID}`,
      {stdio: 'inherit'},
    );
  } else if (props.platform === 'win32') {
    execSync(
      `cd android && ENVFILE=${props.envPath} ./gradlew clean && cd .. && npx react-native run-android --mode=${props.variant} --appId=${envJson.BUNDLE_IDENTIFIER_ANDROID}`,
      {stdio: 'inherit', shell: 'cmd.exe'},
    );
  }
};

/**
 *
 * @param props.platform NodeJS.Platform
 */
const clean = props => {
  const envPaths = [
    'env/.dev',
    'env/.prod',
    'env/.dev.onebooking',
    'env/.prod.onebooking',
  ];

  envPaths.forEach(envPath => {
    if (props.platform === 'darwin') {
      execSync(`cd android && ENVFILE=${envPath} ./gradlew clean && cd ..`, {
        stdio: 'inherit',
      });
    } else if (props.platform === 'win32') {
      execSync(`cd android && ENVFILE=${envPath} ./gradlew clean && cd ..`, {
        stdio: 'inherit',
        shell: 'cmd.exe',
      });
    }
  });

  return;
};

/**
 * @param keyStorePath string
 * @param keyStorePass string
 * @param alias string
 */
const getHashCommand = ({keyStorePath, keyStorePass, alias}) => {
  return `keytool -exportcert -alias ${alias} -keystore android/app/${keyStorePath} -storepass ${keyStorePass} | openssl sha1 -binary | openssl base64`;
};

const getHash = () => {
  console.log('🔑🔑🔑🔑🔑🔑🔑 Key hash for debug 🔑🔑🔑🔑🔑🔑🔑');

  execSync(
    getHashCommand({
      keyStorePath: 'debug.keystore',
      keyStorePass: 'android',
      alias: 'androiddebugkey',
    }),
    {stdio: 'inherit'},
  );

  console.log('');

  readdirSync('env').forEach(r => {
    const envJson = loadEnvFile(join('env', r));

    console.log('🔑🔑🔑🔑🔑🔑🔑 Key hash for env => ', r, '🔑🔑🔑🔑🔑🔑🔑');

    execSync(
      getHashCommand({
        keyStorePath: `release-keystore/${envJson.ANDROID_KEY_STORE_FILE}`,
        keyStorePass: envJson.ANDROID_KEY_STORE_KEY_PASSWORD,
        alias: envJson.ANDROID_KEY_STORE_KEY_ALIAS,
      }),
      {stdio: 'inherit'},
    );

    console.log('');
  });
};

const signingReport = () => {
  readdirSync('env').forEach(r => {
    console.log(
      '🔑🔑🔑🔑🔑🔑🔑 Signing report for env => ',
      r,
      '🔑🔑🔑🔑🔑🔑🔑',
    );

    execSync(
      `cd android && ./gradlew :app:signingReport -PdefaultEnvFile=env/${r}`,
      {stdio: 'inherit'},
    );

    console.log('');
  });
};

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

/**
 *
 * @param query string
 * @returns
 */
const prompt = query =>
  new Promise(resolve => {
    rl.question(query, resolve);
  });

// const genKeyStore = async () => {
//   const keyName = await prompt("What's your keystore name?: ");

//   rl.close();

//   const keyStorePath = `android/app/release-keystore/${keyName}.keystore`;

//   const exist = existsSync(keyStorePath);

//   if (exist) {
//     console.log('A keystore already exists. Please make another one');

//     genKeyStore();

//     return;
//   }

//   execSync(
//     `keytool -genkeypair -v -storetype PKCS12 -keystore ${keyStorePath} -alias my-key-alias -keyalg RSA -keysize 2048 -validity 10000`,
//     { stdio: 'inherit' },
//   );
// };

/**
 * @param envPath string
 */
const genKeyStore = async ({envPath}) => {
  const envJson = loadEnvFile(envPath);

  const keyStorePath = `android/app/release-keystore/${envJson.ANDROID_KEY_STORE_FILE}`;

  const exist = existsSync(keyStorePath);

  if (exist) {
    console.log('A keystore already exists. Please make another one');

    return;
  }

  execSync(
    `keytool -genkeypair -v -storetype PKCS12 -keystore ${keyStorePath} -alias ${envJson.ANDROID_KEY_STORE_KEY_ALIAS} -keyalg RSA -keysize 2048 -validity 10000`,
    {stdio: 'inherit'},
  );
};

(() => {
  const {argv, platform} = process;

  const actualArgv = argv.slice(2);

  const [nameFunc, envPath, variant] = actualArgv;

  switch (nameFunc) {
    case 'run':
      run({platform, variant, envPath});

      break;

    case 'clean':
      clean({platform});

      break;
    case 'hash':
      getHash();

      break;
    case 'report':
      signingReport();

      break;
    case 'keystore':
      genKeyStore({envPath});

      break;

    default:
      break;
  }
})();

export {};
