import React from "react";
import { ActivityIndicator } from "react-native";
import {
  RectButtonProperties,
  RectButtonProps,
} from "react-native-gesture-handler";
import { useTheme } from "styled-components";

import { Container, Title } from "./styles";

interface ButtonProps extends RectButtonProperties {
  title: string;
  color?: string;
  enabled?: boolean;
  loading?: boolean;
  light?: boolean;
}

export function Button({
  title,
  color,
  onPress,
  enabled = true,
  loading = false,
  light = false,
  ...rest
}: ButtonProps) {
  const theme = useTheme();

  return (
    <Container
      light={light}
      color={color!}
      enabled={enabled}
      style={{ opacity: enabled ? 1 : 0.5 }}
      {...rest}
    >
      {loading ? (
        <ActivityIndicator color={theme.colors.shape} />
      ) : (
        <Title light={light}>{title}</Title>
      )}
    </Container>
  );
}
