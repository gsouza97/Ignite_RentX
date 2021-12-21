import React from "react";
import {
  RectButtonProperties,
  RectButtonProps,
} from "react-native-gesture-handler";

import { Container, Title } from "./styles";

interface ButtonProps extends RectButtonProperties {
  title: string;
  color?: string;
  enabled?: boolean;
}

export function Button({ title, color, enabled = true, ...rest }: ButtonProps) {
  return (
    <Container
      color={color!}
      enabled={enabled}
      style={{ opacity: enabled ? 1 : 0.5 }}
      {...rest}
    >
      <Title>{title}</Title>
    </Container>
  );
}
