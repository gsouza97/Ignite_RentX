import React, { useState } from "react";
import {
  StatusBar,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from "react-native";
import { useTheme } from "styled-components";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { PasswordInput } from "../../components/PasswordInput";

import {
  Container,
  SafeArea,
  Header,
  Title,
  Subtitle,
  Form,
  Footer,
} from "./styles";
import * as Yup from "yup";

export function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const theme = useTheme();

  async function handleSignIn() {
    try {
      const schema = Yup.object().shape({
        email: Yup.string()
          .required("E-mail obrigatório")
          .email("Digite um e-mail válido"),
        password: Yup.string().required("A senha é obrigatória"),
      });

      await schema.validate({ email, password });
      Alert.alert("Tudo certo!");

      // Fazer Login
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        Alert.alert("Opa", error.message);
      } else {
        Alert.alert(
          "Erro na autenticação",
          "Ocorreu um erro ao fazer login. Verifique as credenciais"
        );
      }
    }
  }

  return (
    <SafeArea>
      <KeyboardAvoidingView behavior="position" enabled>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <Container>
            <StatusBar
              barStyle="dark-content"
              backgroundColor="transparent"
              translucent
            />
            <Header>
              <Title>Estamos{"\n"}quase lá.</Title>
              <Subtitle>
                Faça seu login para começar{"\n"}uma experiência incrível.
              </Subtitle>
            </Header>

            <Form>
              <Input
                iconName="mail"
                placeholder="E-mail"
                keyboardType="email-address"
                autoCorrect={false}
                autoCapitalize="none"
                value={email}
                onChangeText={setEmail}
              />
              <PasswordInput
                iconName="lock"
                placeholder="Senha"
                value={password}
                onChangeText={setPassword}
              />
            </Form>

            <Footer>
              <Button
                title="Login"
                enabled={true}
                loading={false}
                onPress={handleSignIn}
              />
              <Button
                title="Criar conta gratuita"
                color={theme.colors.background_secondary}
                light
                enabled={false}
                loading={false}
                onPress={() => {}}
              />
            </Footer>
          </Container>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeArea>
  );
}
