import React from "react";
import { Accessory } from "../../components/Accessory";
import { BackButton } from "../../components/BackButton";
import { ImageSlider } from "../../components/ImageSlider";

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
  About,
  Accessories,
  Footer,
} from "./styles";
import { Button } from "../../components/Button";
import {
  useNavigation,
  NavigationProp,
  ParamListBase,
  useRoute,
} from "@react-navigation/native";
import { StatusBar } from "react-native";
import { CarDTO } from "../../dtos/CarDTO";
import { getAccessoryIcon } from "../../utils/getAccessoryIcon";

interface Params {
  car: CarDTO;
}

export function CarDetails() {
  const navigation: NavigationProp<ParamListBase> = useNavigation();
  const route = useRoute();
  const { car } = route.params as Params;

  function handleConfirmRental() {
    navigation.navigate("Schedule", { car });
  }

  function handleBack() {
    navigation.goBack();
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
              <Period>{car.rent.period}</Period>
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

          <About>{car.about}</About>
        </Content>

        <Footer>
          <Button
            title="Escolher período de aluguel"
            onPress={handleConfirmRental}
          />
        </Footer>
      </SafeArea>
    </Container>
  );
}
