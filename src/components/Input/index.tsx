/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';

import { Text, TextInputProps } from 'react-native';

import { Container, TextInput } from './styles';

interface InputProps extends TextInputProps {
  name: string;
  icon: string;
}

const Input: React.FC<InputProps> = ({ name, icon, ...rest }) => {
  return (
    <Container>
      <TextInput placeholderTextColor="#666363" {...rest} />
    </Container>
  );
};

export default Input;
