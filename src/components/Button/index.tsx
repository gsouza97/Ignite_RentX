import React from "react";
import {
  RectButtonProperties,
  RectButtonProps,
} from "react-native-gesture-handler";

import { Container, Title } from "./styles";

interface ButtonProps extends RectButtonProperties {
  title: string;
  color?: string;
}

export function Button({ title, color, ...rest }: ButtonProps) {
  return (
    <Container color={color!} {...rest}>
      <Title>{title}</Title>
    </Container>
  );
}
