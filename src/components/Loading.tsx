import {ActivityIndicator} from 'react-native';
import React from 'react';

export type LoadingProps = {
  color?: string;
};

export const Loading = ({color = undefined}: LoadingProps) => {
  return <ActivityIndicator color={color} />;
};
