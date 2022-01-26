import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from "@react-navigation/native";
import React, { useState } from "react";
import {
  Alert,
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
} from "react-native";
import { BackButton } from "../../../components/BackButton";
import { Bullet } from "../../../components/Bullet";
import { Button } from "../../../components/Button";
import { Input } from "../../../components/Input";
import * as Yup from "yup";

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
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [driverLicense, setDriverLicense] = useState("");
  const navigation: NavigationProp<ParamListBase> = useNavigation();

  function handleBack() {
    navigation.goBack();
  }

  async function handleNextStep() {
    try {
      const schema = Yup.object().shape({
        driverLicense: Yup.string().required("CNH é obrigatória"),
        email: Yup.string()
          .email("E-mail inválido")
          .required("E-mail é obrigatório"),
        name: Yup.string().required("Nome é obrigatório"),
      });

      const data = { name, email, driverLicense };
      await schema.validate(data);

      navigation.navigate("SignUpSecondStep", { user: data });
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        return Alert.alert("Opa", error.message);
      }
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
                <Bullet />
              </Steps>
            </Header>

            <Title>Crie sua{"\n"}conta</Title>
            <Subtitle>Faça seu cadastro de{"\n"}forma rápida e fácil</Subtitle>

            <Form>
              <FormTitle>1. Dados</FormTitle>
              <Input
                iconName="user"
                placeholder="Nome"
                autoCapitalize="words"
                value={name}
                onChangeText={setName}
              />
              <Input
                iconName="mail"
                placeholder="E-mail"
                keyboardType="email-address"
                autoCapitalize="none"
                value={email}
                onChangeText={setEmail}
              />
              <Input
                iconName="credit-card"
                placeholder="CNH"
                keyboardType="numeric"
                value={driverLicense}
                onChangeText={setDriverLicense}
              />
            </Form>

            <Button title="Próximo" onPress={handleNextStep} />
          </SafeArea>
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
