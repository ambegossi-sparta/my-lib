import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const Button = () => {
  return (
    <TouchableOpacity style={{ backgroundColor: 'tomato', borderRadius: 10, margin: 8 }}>
      <Text style={{ padding: 16 }}>
        My Button
      </Text>
    </TouchableOpacity>
  )
}

export default Button
