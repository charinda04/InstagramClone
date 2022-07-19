import { ColorValue } from 'react-native';

export interface Dimensions {
  width?: number;
  height?: number;
  aspectRatio?: number;
}

export type CustomFont = {
  fontFamily?: string | undefined;
  color?: ColorValue | undefined;
  textTransform?: 'none' | 'capitalize' | 'uppercase' | 'lowercase' | undefined;
  fontSize?: number | undefined | string;
  lineHeight?: number | undefined | string;
};
