import {execSync} from 'child_process';

(function () {
  const path = '.';

  execSync(`watchman watch-del ${path} ; watchman watch-project ${path}`, {
    stdio: 'inherit',
  });

  execSync('npx react-native start --reset-cache', {stdio: 'inherit'});
})();
