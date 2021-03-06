import { RectButton } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

interface ButtonProps {
  color: string;
}

interface TitleProps {
  light: boolean;
}

export const Container = styled(RectButton)<ButtonProps>`
  width: 100%;
  background-color: ${({ theme, color }) =>
    color ? color : theme.colors.main};

  justify-content: center;
  align-items: center;

  padding: 19px;
  margin-bottom: 8px;
`;

export const Title = styled.Text<TitleProps>`
  font-family: ${({ theme }) => theme.fonts.primary_500};
  color: ${({ theme, light }) =>
    light ? theme.colors.header : theme.colors.shape};
  font-size: ${RFValue(15)}px;
`;
