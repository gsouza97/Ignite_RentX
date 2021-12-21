import React, { useState } from "react";
import { useTheme } from "styled-components";
import { BackButton } from "../../components/BackButton";
import ArrowSvg from "../../assets/arrow.svg";
import { format } from "date-fns";

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
import {
  Calendar,
  DayProps,
  generateInterval,
  MarkedDateProps,
} from "../../components/Calendar";
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import { getPlatformDate } from "../../utils/getPlatformDate";
import { CarDTO } from "../../dtos/CarDTO";

interface RentalPeriod {
  startFormatted: string;
  endFormatted: string;
}

interface Params {
  car: CarDTO;
}

export function Schedule() {
  const [lastSelectedDate, setLastSelectedDate] = useState<DayProps>(
    {} as DayProps
  );
  const [markedDates, setMarkedDates] = useState<MarkedDateProps>(
    {} as MarkedDateProps
  );
  const [rentalPeriod, setRentalPeriod] = useState<RentalPeriod>(
    {} as RentalPeriod
  );

  const route = useRoute();
  const { car } = route.params as Params;

  const theme = useTheme();
  const navigation: NavigationProp<ParamListBase> = useNavigation();

  function handleConfirmRental() {
    navigation.navigate("ScheduleDetails", {
      car,
      dates: Object.keys(markedDates),
    });
  }

  function handleBack() {
    navigation.goBack();
  }

  function handleChangeDate(date: DayProps) {
    let start = !lastSelectedDate.timestamp ? date : lastSelectedDate;
    let end = date;

    if (start.timestamp > end.timestamp) {
      start = end;
      end = start;
    }

    setLastSelectedDate(end);
    const interval = generateInterval(start, end);
    setMarkedDates(interval);

    const firstDate = Object.keys(interval)[0];
    const endDate = Object.keys(interval)[Object.keys(interval).length - 1];

    setRentalPeriod({
      startFormatted: format(
        getPlatformDate(new Date(firstDate)),
        "dd/MM/yyyy"
      ),
      endFormatted: format(getPlatformDate(new Date(endDate)), "dd/MM/yyyy"),
    });
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
          <BackButton onPress={handleBack} color={theme.colors.shape} />

          <Title>
            Escolha uma {"\n"}data de início e {"\n"}fim do aluguel
          </Title>

          <RentalPeriod>
            <DateInfo>
              <DateTitle>de</DateTitle>
              <DateValueContainer selected={!!rentalPeriod.startFormatted}>
                <DateValue>{rentalPeriod.startFormatted}</DateValue>
              </DateValueContainer>
            </DateInfo>

            <ArrowSvg />

            <DateInfo>
              <DateTitle>até</DateTitle>
              <DateValueContainer selected={!!rentalPeriod.endFormatted}>
                <DateValue>{rentalPeriod.endFormatted}</DateValue>
              </DateValueContainer>
            </DateInfo>
          </RentalPeriod>
        </SafeArea>
      </Header>

      <Content>
        <Calendar markedDates={markedDates} onDayPress={handleChangeDate} />
      </Content>

      <SafeArea>
        <Footer>
          <Button
            title="Confirmar"
            onPress={handleConfirmRental}
            enabled={
              !!rentalPeriod.startFormatted && !!rentalPeriod.endFormatted
            }
          />
        </Footer>
      </SafeArea>
    </Container>
  );
}
