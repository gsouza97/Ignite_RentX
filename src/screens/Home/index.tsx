import React from "react";
import { StatusBar } from "react-native";

import { Container, HeaderContent, Header, TotalCars } from "./styles";
import Logo from "../../assets/logo.svg";
import { RFValue } from "react-native-responsive-fontsize";
import { Car } from "../../components/Car";

export function Home() {
  const carData = {
    brand: "Audi",
    name: "RS 5 Coupé",
    rent: {
      period: "ao dia",
      price: 120,
    },
    thumbnail:
      "https://png.monster/wp-content/uploads/2020/11/2018-audi-rs5-4wd-coupe-angular-front-5039562b.png",
  };

  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />

      <Header>
        <HeaderContent>
          <Logo height={RFValue(12)} width={RFValue(108)} />
          <TotalCars>Total de 12 carros</TotalCars>
        </HeaderContent>
      </Header>

      <Car data={carData} />
      <Car data={carData} />
    </Container>
  );
}
