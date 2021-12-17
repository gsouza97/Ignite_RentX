import React from "react";
import { useTheme } from "styled-components";
import { BackButton } from "../../components/BackButton";
import ArrowSvg from "../../assets/arrow.svg";

import {
  Container,
  Header,
  SafeArea,
  Title,
  RentalPeriod,
  DateInfo,
  DateTitle,
  DateValue,
  DateValueContainer,
  Content,
  Footer,
} from "./styles";
import { StatusBar } from "react-native";
import { Button } from "../../components/Button";
import { Calendar } from "../../components/Calendar";
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from "@react-navigation/native";

export function Schedule() {
  const theme = useTheme();
  const navigation: NavigationProp<ParamListBase> = useNavigation();

  function handleConfirmRental() {
    navigation.navigate("ScheduleDetails");
  }

  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Header>
        <SafeArea>
          <BackButton onPress={() => {}} color={theme.colors.shape} />

          <Title>
            Escolha uma {"\n"}data de início e {"\n"}fim do aluguel
          </Title>

          <RentalPeriod>
            <DateInfo>
              <DateTitle>de</DateTitle>
              <DateValueContainer selected={false}>
                <DateValue>18/06/2021</DateValue>
              </DateValueContainer>
            </DateInfo>

            <ArrowSvg />

            <DateInfo>
              <DateTitle>até</DateTitle>
              <DateValueContainer selected={false}>
                <DateValue>18/06/2021</DateValue>
              </DateValueContainer>
            </DateInfo>
          </RentalPeriod>
        </SafeArea>
      </Header>

      <Content>
        <Calendar />
      </Content>

      <SafeArea>
        <Footer>
          <Button title="Confirmar" onPress={handleConfirmRental} />
        </Footer>
      </SafeArea>
    </Container>
  );
}
