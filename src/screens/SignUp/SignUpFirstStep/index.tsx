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
import { BackButton } from "../../../components/BackButton";
import { Bullet } from "../../../components/Bullet";
import { Button } from "../../../components/Button";
import { Input } from "../../../components/Input";

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

export function SignUpFirstStep() {
  const navigation: NavigationProp<ParamListBase> = useNavigation();

  function handleBack() {
    navigation.goBack();
  }

  function handleNextStep() {
    navigation.navigate("SignUpSecondStep");
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
              <FormTitle>1. Dados</FormTitle>
              <Input iconName="user" placeholder="Nome" />
              <Input
                iconName="mail"
                placeholder="E-mail"
                keyboardType="email-address"
              />
              <Input
                iconName="credit-card"
                placeholder="CNH"
                keyboardType="numeric"
              />
            </Form>

            <Button title="Próximo" onPress={handleNextStep} />
          </SafeArea>
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
