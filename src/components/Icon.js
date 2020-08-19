import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export const Icon = ({ color, name, size }) => {
  return (
    <MaterialIcons
      color={color ? color : '#fff'}
      name={name ? name : 'circule'}
      size={size ? size : 30}
    />
  );
};
