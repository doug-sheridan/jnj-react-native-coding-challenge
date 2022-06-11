import React from 'react';
import {StyleProp, StyleSheet, Text, TextStyle} from 'react-native';

export type TypographyProps = {
  variant: 'h' | 'body';
  children?: string;
  style?: StyleProp<TextStyle>;
  color?: string;
  bold?: boolean;
};

const styleMap = StyleSheet.create({
  h: {
    fontSize: 48,
    fontWeight: 'bold',
  },
  body: {
    fontSize: 24,
    color: '#3a3a3a',
  },
});

export const Typography = ({
  variant,
  children,
  style,
  color,
  bold = false,
}: TypographyProps) => {
  return (
    <Text
      style={[
        style,
        styleMap[variant],
        color ? {color} : undefined,
        bold ? {fontWeight: 'bold'} : undefined,
      ]}>
      {children}
    </Text>
  );
};
