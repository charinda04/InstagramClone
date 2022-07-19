import { Platform } from 'react-native';
import axios, { AxiosInstance } from 'axios';
// import Config from 'react-native-config';

import { getAppBuildNumber } from '@utils/appUtils';
import { APP_TYPE_AMNESIA } from '@src/shared/constants';

import { version } from '../../package.json';

const axiosInstance: AxiosInstance = axios.create({
  // baseURL: Config.API_BASE_URL,
});

// console.log(`Running --> ${Config.API_BASE_URL}`);

axiosInstance.defaults.headers.common['mobile-app-version'] = version;
axiosInstance.defaults.headers.common['mobile-app-os'] = Platform.OS.toUpperCase();
axiosInstance.defaults.headers.common['X-AppType'] = APP_TYPE_AMNESIA;
axiosInstance.defaults.headers.common['X-AppVersionNumber'] = getAppBuildNumber();
axiosInstance.defaults.headers.common.Accept = 'application/json; charset=utf-8';
axiosInstance.defaults.headers.common['Content-Type'] = 'application/json; charset=utf-8';

export const setAuthHeader = (authToken?: string): void => {
  if (authToken) {
    axiosInstance.defaults.headers.common.Authorization = `Bearer ${authToken}`;
  }
};

export const removeAuthHeader = (): void => {
  axiosInstance.defaults.headers.common.Authorization = false;
};

export default axiosInstance;
