import {
  NavigationProp,
  ParamListBase,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import React, { useState } from "react";
import {
  Alert,
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
} from "react-native";
import { useTheme } from "styled-components";
import { BackButton } from "../../../components/BackButton";
import { Bullet } from "../../../components/Bullet";
import { Button } from "../../../components/Button";
import { PasswordInput } from "../../../components/PasswordInput";
import api from "../../../services/api";

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

interface Params {
  user: {
    name: string;
    email: string;
    driverLicense: string;
  };
}

export function SignUpSecondStep() {
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const navigation: NavigationProp<ParamListBase> = useNavigation();
  const route = useRoute();
  const { user } = route.params as Params;

  const theme = useTheme();

  function handleBack() {
    navigation.goBack();
  }

  async function handleRegister() {
    if (!password || !passwordConfirm) {
      return Alert.alert("Informe a senha e a confirmação");
    }

    if (password != passwordConfirm) {
      return Alert.alert("As senhas não conferem");
    }

    try {
      await api.post("/users", {
        name: user.name,
        email: user.email,
        driver_license: user.driverLicense,
        password,
      });

      navigation.navigate("Confirmation", {
        nextScreenRoute: "SignIn",
        title: "Conta criada!",
        message: `Agora é só fazer login\ne aproveitar.`,
      });
    } catch (error) {
      return Alert.alert("Opa", "Não foi possível cadastrar");
    }
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
                <Bullet active />
              </Steps>
            </Header>

            <Title>Crie sua{"\n"}conta</Title>
            <Subtitle>Faça seu cadastro de{"\n"}forma rápida e fácil</Subtitle>

            <Form>
              <FormTitle>2. Dados</FormTitle>
              <PasswordInput
                iconName="lock"
                placeholder="Senha"
                value={password}
                onChangeText={setPassword}
              />
              <PasswordInput
                iconName="lock"
                placeholder="Repetir senha"
                value={passwordConfirm}
                onChangeText={setPasswordConfirm}
              />
            </Form>

            <Button
              title="Cadastrar"
              color={theme.colors.success}
              onPress={handleRegister}
            />
          </SafeArea>
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
