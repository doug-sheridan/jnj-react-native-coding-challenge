import React from 'react';
import {StyleProp, StyleSheet, Text, TextStyle} from 'react-native';

export type TypographyProps = {
  variant: 'h' | 'body';
  children?: string;
  style?: StyleProp<TextStyle>;
};

const styleMap = StyleSheet.create({
  h: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  body: {
    fontSize: 24,
  },
});

export const Typography = ({variant, children, style}: TypographyProps) => {
  return <Text style={[style, styleMap[variant]]}>{children}</Text>;
};
