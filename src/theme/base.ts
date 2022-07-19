/* App wide base styles */
import { FONTS } from '@utils/fontUtils';
import { TextStyle } from 'react-native';
import colors from './colors';
import Metrics from './metrics';

export const LargeTextFont = {
  fontFamily: FONTS.roboto.regular,
  fontSize: Metrics.fontSize.large,
};

export const PrimaryTextFont = {
  fontFamily: FONTS.roboto.regular,
  fontSize: Metrics.fontSize.primary,
};

export const MediumTextFont = {
  fontFamily: FONTS.roboto.regular,
  fontSize: Metrics.fontSize.medium,
};

export const SmallTextFont = {
  fontFamily: FONTS.roboto.regular,
  fontSize: Metrics.fontSize.small,
};

export const RobotoRegular = {
  fontFamily: FONTS.roboto.regular,
};

export const SecondaryText = {
  fontSize: Metrics.fontSize.medium,
};

export const dinFont = {
  fontFamily: 'DINCondensed-Bold',
  letterSpacing: 0.3,
};

export type Font = Pick<TextStyle, 'fontFamily' | 'color' | 'textTransform' | 'fontSize' | 'lineHeight'>;

export const FontFamilySemiBold = {
  fontFamily: 'RobotoCondensed-Bold',
};

export const loginNavSafeAreaStyle = {
  flex: 1,
  backgroundColor: colors.background.white,
};

export const FontFamilyRegular = {
  fontFamily: FONTS.roboto.regular,
};
