import React from "react";

import { Container, Content, Title, Message, SafeArea, Footer } from "./styles";

import LogoSvg from "../../assets/logo_background_gray.svg";
import DoneSvg from "../../assets/done.svg";
import { Dimensions, StatusBar } from "react-native";
import { ConfirmButton } from "../../components/ConfirmButton";
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
  useRoute,
} from "@react-navigation/native";

interface Params {
  title: string;
  message: string;
  nextScreenRoute: string;
}

export function Confirmation() {
  const width = Dimensions.get("window").width;
  const navigation: NavigationProp<ParamListBase> = useNavigation();
  const route = useRoute();
  const { title, message, nextScreenRoute } = route.params as Params;

  function handleConfirm() {
    navigation.navigate(nextScreenRoute);
  }

  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <SafeArea>
        <LogoSvg width={width} />
      </SafeArea>

      <Content>
        <DoneSvg />
        <Title>{title}</Title>
        <Message>{message}</Message>
      </Content>

      <SafeArea>
        <Footer>
          <ConfirmButton title="Ok" onPress={handleConfirm} />
        </Footer>
      </SafeArea>
    </Container>
  );
}
