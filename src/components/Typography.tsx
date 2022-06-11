import React from 'react';
import {StyleProp, StyleSheet, Text, TextStyle} from 'react-native';

export type TypographyProps = {
  variant: 'h' | 'body';
  children?: string;
  style?: StyleProp<TextStyle>;
  color?: string;
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

export const Typography = ({
  variant,
  children,
  style,
  color,
}: TypographyProps) => {
  return (
    <Text
      style={[
        style,
        styleMap[variant],
        {
          color: color ? color : undefined,
        },
      ]}>
      {children}
    </Text>
  );
};
