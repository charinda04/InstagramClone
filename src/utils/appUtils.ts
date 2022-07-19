import { getBuildNumber } from 'react-native-device-info';
import { isNaN } from 'lodash';

const getTestIdProps = (id: string): { accessible: boolean; accessibilityLabel: string; testID: string } => ({
  accessible: true,
  accessibilityLabel: id,
  testID: id,
});

const delayAsync = async (timeout: number): Promise<void> => {
  await new Promise(resolve => setTimeout(resolve, timeout));
};

const numberWithCommas = (number: number): string => number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

/**
 * @param array Array<string>
 * @returns string with commas
 * @description ['x','y'] => 'x, y'
 */
const arrayToString = (array: Array<string>): string => array.toString().replace(/,/g, ', ');

const getAppBuildNumber = (): string => getBuildNumber();

const stringIsNumber = (value: number | string): boolean => isNaN(Number(value)) === false;

const convertToSentenceCase = (text?: string): string => {
  if (text) {
    const str = text.trim();
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  }
  return '';
};

export { getTestIdProps, delayAsync, numberWithCommas, arrayToString, getAppBuildNumber, stringIsNumber, convertToSentenceCase };
