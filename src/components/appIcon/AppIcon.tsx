import React from 'react';
import { createIconSetFromIcoMoon } from 'react-native-vector-icons';
import { IconProps } from 'react-native-vector-icons/Icon';
import { StyleSheet } from 'react-native';

import IcomoonConfig from '@src/theme/selection.json';
import Colors from '@src/theme/colors';

const styles = StyleSheet.create({
  default: {
    color: Colors.font.black,
    fontSize: 10,
  },
});

const IcomoonIcon = createIconSetFromIcoMoon(IcomoonConfig);

const AppIcon: React.FC<IconProps> = (props: IconProps) => <IcomoonIcon {...props} />;

AppIcon.defaultProps = {
  style: styles.default,
};

export default AppIcon;
