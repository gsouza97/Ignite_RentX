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
} from "@react-navigation/native";

export function ScheduleCompleted() {
  const width = Dimensions.get("window").width;
  const navigation: NavigationProp<ParamListBase> = useNavigation();

  function handleConfirm() {
    navigation.navigate("Home");
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
        <Title>Carro Alugado</Title>
        <Message>
          Agora voce só precisa ir {"\n"}até a concessionária da RENTX {"\n"}
          pegar o seu automóvel.
        </Message>
      </Content>

      <SafeArea>
        <Footer>
          <ConfirmButton title="Ok" onPress={handleConfirm} />
        </Footer>
      </SafeArea>
    </Container>
  );
}
