import React, { useState, useEffect } from "react";
import { Accessory } from "../../components/Accessory";
import { BackButton } from "../../components/BackButton";
import { ImageSlider } from "../../components/ImageSlider";
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
import { Alert, StatusBar } from "react-native";
import { CarDTO } from "../../dtos/CarDTO";
import { getAccessoryIcon } from "../../utils/getAccessoryIcon";
import { format } from "date-fns";
import { getPlatformDate } from "../../utils/getPlatformDate";
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import api from "../../services/api";
import { Loading } from "../../components/Loading";

interface Params {
  car: CarDTO;
  dates: string[];
}

interface RentalPeriod {
  start: string;
  end: string;
}

export function ScheduleDetails() {
  const [isLoading, setIsLoading] = useState(false);
  const [rentalPeriod, setRentalPeriod] = useState<RentalPeriod>(
    {} as RentalPeriod
  );

  const theme = useTheme();
  const navigation: NavigationProp<ParamListBase> = useNavigation();
  const routes = useRoute();
  const { car, dates } = routes.params as Params;
  const rentTotal = dates.length * car.rent.price;

  async function handleConfirmRental() {
    setIsLoading(true);
    const schedulesByCar = await api.get(`/schedules_bycars/${car.id}`);

    const unavailable_dates = [
      ...schedulesByCar.data.unavailable_dates,
      ...dates,
    ];

    try {
      await api.put(`/schedules_bycars/${car.id}`, {
        id: car.id,
        unavailable_dates: unavailable_dates,
      });
      navigation.navigate("ScheduleCompleted");
    } catch (error) {
      console.log(error);
      Alert.alert("Não foi possível confirmar o agendamento");
    } finally {
      setIsLoading(false);
    }
  }

  function handleBack() {
    navigation.goBack();
  }

  useEffect(() => {
    setRentalPeriod({
      start: format(getPlatformDate(new Date(dates[0])), "dd/MM/yyyy"),
      end: format(
        getPlatformDate(new Date(dates[dates.length - 1])),
        "dd/MM/yyyy"
      ),
    });
  }, []);

  return (
    <Container>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      {isLoading ? (
        <Loading />
      ) : (
        <SafeArea>
          <Header>
            <BackButton onPress={handleBack} />
          </Header>

          <CarImages>
            <ImageSlider imagesUrl={car.photos} />
          </CarImages>

          <Content>
            <Details>
              <Description>
                <Brand>{car.brand}</Brand>
                <Name>{car.name}</Name>
              </Description>

              <Rent>
                <Period>Ao dia</Period>
                <Price>R$ {car.rent.price}</Price>
              </Rent>
            </Details>

            <Accessories>
              {car.accessories.map((accesory) => (
                <Accessory
                  key={accesory.type}
                  name={accesory.name}
                  icon={getAccessoryIcon(accesory.type)}
                />
              ))}
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
                <DateValue>{rentalPeriod.start}</DateValue>
              </DateInfo>

              <Feather
                name="chevron-right"
                size={RFValue(10)}
                color={theme.colors.text}
              />

              <DateInfo>
                <DateTitle>Até</DateTitle>
                <DateValue>{rentalPeriod.end}</DateValue>
              </DateInfo>
            </RentalPeriod>

            <RentalPrice>
              <RentalPriceLabel>Total</RentalPriceLabel>
              <RentalPriceDetails>
                <RentalPriceQuota>
                  R$ {car.rent.price} x{dates.length} diárias
                </RentalPriceQuota>
                <RentalPriceTotal>R$ {rentTotal}</RentalPriceTotal>
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
      )}
    </Container>
  );
}
