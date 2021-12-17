import React from "react";
import { Accessory } from "../../components/Accessory";
import { BackButton } from "../../components/BackButton";
import { ImageSlider } from "../../components/ImageSlider";
import SpeedSvg from "../../assets/speed.svg";
import AccelerationSvg from "../../assets/acceleration.svg";
import ForceSvg from "../../assets/force.svg";
import GasolineSvg from "../../assets/gasoline.svg";
import ExchangeSvg from "../../assets/exchange.svg";
import PeopleSvg from "../../assets/people.svg";
import { Feather } from "@expo/vector-icons";

import {
  Container,
  SafeArea,
  Header,
  CarImages,
  Content,
  Details,
  Description,
  Brand,
  Name,
  Rent,
  Period,
  Price,
  Accessories,
  Footer,
  RentalPeriod,
  CalendarIcon,
  DateInfo,
  DateTitle,
  DateValue,
  RentalPrice,
  RentalPriceLabel,
  RentalPriceDetails,
  RentalPriceQuota,
  RentalPriceTotal,
} from "./styles";
import { Button } from "../../components/Button";
import { RFValue } from "react-native-responsive-fontsize";
import { useTheme } from "styled-components";
import { StatusBar } from "react-native";
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from "@react-navigation/native";

export function ScheduleDetails() {
  const theme = useTheme();
  const navigation: NavigationProp<ParamListBase> = useNavigation();

  function handleConfirmRental() {
    navigation.navigate("ScheduleCompleted");
  }

  return (
    <Container>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      <SafeArea>
        <Header>
          <BackButton onPress={() => {}} />
        </Header>

        <CarImages>
          <ImageSlider
            imagesUrl={[
              "https://png.monster/wp-content/uploads/2020/11/2018-audi-rs5-4wd-coupe-angular-front-5039562b.png",
            ]}
          />
        </CarImages>

        <Content>
          <Details>
            <Description>
              <Brand>Lamborghini</Brand>
              <Name>Huracan</Name>
            </Description>

            <Rent>
              <Period>Ao dia</Period>
              <Price>R$ 580</Price>
            </Rent>
          </Details>

          <Accessories>
            <Accessory name="380km/h" icon={SpeedSvg} />
            <Accessory name="3.2s" icon={AccelerationSvg} />
            <Accessory name="800 HP" icon={ForceSvg} />
            <Accessory name="Gasolina" icon={GasolineSvg} />
            <Accessory name="Auto" icon={ExchangeSvg} />
            <Accessory name="2 pessoas" icon={PeopleSvg} />
          </Accessories>

          <RentalPeriod>
            <CalendarIcon>
              <Feather
                name="calendar"
                size={RFValue(24)}
                color={theme.colors.background_secondary}
              />
            </CalendarIcon>

            <DateInfo>
              <DateTitle>De</DateTitle>
              <DateValue>18/06/2021</DateValue>
            </DateInfo>

            <Feather
              name="chevron-right"
              size={RFValue(10)}
              color={theme.colors.text}
            />

            <DateInfo>
              <DateTitle>Até</DateTitle>
              <DateValue>18/06/2021</DateValue>
            </DateInfo>
          </RentalPeriod>

          <RentalPrice>
            <RentalPriceLabel>Total</RentalPriceLabel>
            <RentalPriceDetails>
              <RentalPriceQuota>R$ 580 x3 diárias</RentalPriceQuota>
              <RentalPriceTotal>R$ 2.900</RentalPriceTotal>
            </RentalPriceDetails>
          </RentalPrice>
        </Content>

        <Footer>
          <Button
            title="Alugar agora"
            color={theme.colors.success}
            onPress={handleConfirmRental}
          />
        </Footer>
      </SafeArea>
    </Container>
  );
}
