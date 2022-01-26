import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from "@react-navigation/native";
import React from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
} from "react-native";
import { useTheme } from "styled-components";
import { BackButton } from "../../../components/BackButton";
import { Bullet } from "../../../components/Bullet";
import { Button } from "../../../components/Button";
import { Input } from "../../../components/Input";
import { PasswordInput } from "../../../components/PasswordInput";

import {
  Container,
  Header,
  SafeArea,
  Steps,
  Title,
  Subtitle,
  Form,
  FormTitle,
} from "./styles";

export function SignUpSecondStep() {
  const navigation: NavigationProp<ParamListBase> = useNavigation();
  const theme = useTheme();

  function handleBack() {
    navigation.goBack();
  }

  return (
    <KeyboardAvoidingView behavior="position" enabled>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Container>
          <SafeArea>
            <Header>
              <BackButton onPress={handleBack} />
              <Steps>
                <Bullet />
                <Bullet />
              </Steps>
            </Header>

            <Title>Crie sua{"\n"}conta</Title>
            <Subtitle>Faça seu cadastro de{"\n"}forma rápida e fácil</Subtitle>

            <Form>
              <FormTitle>2. Dados</FormTitle>
              <PasswordInput iconName="lock" placeholder="Senha" />
              <PasswordInput iconName="lock" placeholder="Repetir senha" />
            </Form>

            <Button title="Cadastrar" color={theme.colors.success} />
          </SafeArea>
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
