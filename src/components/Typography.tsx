import React from 'react';
import {StyleSheet, Text} from 'react-native';

export type TypographyProps = {
  variant: 'h' | 'body';
  children?: string;
};

const styleMap = StyleSheet.create({
  h: {
    fontSize: 32,
  },
  body: {
    fontSize: 24,
  },
});

export const Typography = ({variant, children}: TypographyProps) => {
  return <Text style={styleMap[variant]}>{children}</Text>;
};
