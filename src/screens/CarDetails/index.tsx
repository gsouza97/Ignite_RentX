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

export function CarDetails() {
  return (
    <SafeArea>
      <Container>
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

          <About>
            Este é automóvel desportivo. Surgiu do lendário touro de lide
            indultado na praça Real Maestranza de Sevilla. É um belíssimo carro
            quem gosta de acelerar.
          </About>
        </Content>

        <Footer>
          <Button title="Escolher o período de aluguel" />
        </Footer>
      </Container>
    </SafeArea>
  );
}
