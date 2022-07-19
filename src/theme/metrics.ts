/* App wide metrics (TO BE REFACTORED) */
import { Dimensions, PixelRatio, Platform } from 'react-native';
import { hasNotch as notchHave } from 'react-native-device-info';
import { getStatusBarHeight } from 'react-native-status-bar-height';

const { width, height } = Dimensions.get('window');

const isAndroid = Platform.OS === 'android';
const StatusBarHeight = getStatusBarHeight();
const hasNotch = (): boolean => (isAndroid ? StatusBarHeight > 25 || notchHave() : notchHave());

export const viewportWidth: number = width;

export const viewportHeight: number = height;

export const designViewPortWidth = 375;

export const designViewPortHeight = 812;

export const designHeightRatio = viewportHeight / designViewPortHeight;
export const designWidthRatio = viewportWidth / designViewPortWidth;

export const pixelDensity = 3 / PixelRatio.get();

// Calculate metric values to different screen sizes while maintaining aspect ratios of design
export const calculateMetric = (value: number): number => (value / designViewPortWidth) * viewportWidth;

export const calculatePixels = (value: number): number => value * pixelDensity;

export const transparentAppBarMarginTop = hasNotch() ? 50 : 25;

let ExtraStatusBarHeight = 0;

const virtualStatusBarHeight = (): number => {
  let heightLocal = StatusBarHeight;
  if (isAndroid) {
    ExtraStatusBarHeight = 10;
    heightLocal = StatusBarHeight + ExtraStatusBarHeight;
  } else if (!hasNotch()) {
    ExtraStatusBarHeight = 10;
    heightLocal = StatusBarHeight + ExtraStatusBarHeight;
  }
  return heightLocal;
};

export const SafeStatusBarHeight = virtualStatusBarHeight();

/**
 * App dimensions
 */
export default {
  /**
   * Font sizes
   * @type {Object}
   */
  fontSize: {
    xxxLarge: 38,
    xxLarge: 28,
    xLarge: 24,
    large: 20,
    primary: 16, // default
    medium: 14,
    small: 12,
  },
  /**
   * Font weights
   * @type {Object}
   */
  fontWeight: {
    thin: '100',
    ultraLight: '200',
    light: '300',
    regular: '400', // default
    medium: '500',
    semibold: '600',
    bold: '700',
    heavy: '800',
    black: '900',
  },

  /**
   * Line height
   * @type {Object}
   */
  lineHeight: {
    primary: 20,
    medium: 16,
    regular: 22,
    xLarge: 24,
    xxlarge: 28,
    xxxlarge: 38,
  },

  /**
   * Paddings
   * @type {Object}
   */
  padding: {},

  /**
   * Tab bar metrics
   * @type {Object}
   */
  tabBar: {
    height: 70,
  },

  /**
   * Icon Size
   * @type {Object}
   */
  iconSize: {
    largeMax: 50,
    xxxxLarge: 35,
    infoCircle: 34,
    xxxLarge: 30,
    xxLarge: 25,
    tickIcon: 22,
    xLarge: 20,
    large: 18,
    primary: 15,
    medium: 13,
    small: 8.75,
    xSmall: 6,
  },

  /**
   * Avatar metrics
   * @type {Object}
   */
  avatar: {},

  /**
   * Border radius metrics
   * @type {Object}
   */
  borderRadius: {},

  SafeStatusBarHeight,
};
