import React from "react";
import { Accessory } from "../../components/Accessory";
import { BackButton } from "../../components/BackButton";
import { ImageSlider } from "../../components/ImageSlider";

import {
  Container,
  SafeArea,
  Header,
  CarImages,
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
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
  useAnimatedStyle,
  interpolate,
  Extrapolate,
} from "react-native-reanimated";

interface Params {
  car: CarDTO;
}

export function CarDetails() {
  const navigation: NavigationProp<ParamListBase> = useNavigation();
  const route = useRoute();
  const { car } = route.params as Params;

  const scrollY = useSharedValue(0);
  const scrollHandler = useAnimatedScrollHandler((event) => {
    scrollY.value = event.contentOffset.y;
    console.log(event.contentOffset.y);
  });

  const headerStyleAnimation = useAnimatedStyle(() => {
    return {
      height: interpolate(
        scrollY.value,
        [0, 200],
        [200, 50],
        Extrapolate.CLAMP
      ),
    };
  });

  const sliderCarsStyleAnimation = useAnimatedStyle(() => {
    return {
      opacity: interpolate(scrollY.value, [0, 150], [1, 0], Extrapolate.CLAMP),
    };
  });

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
        <Animated.View style={[headerStyleAnimation]}>
          <Header style={{ zIndex: 2 }}>
            <BackButton onPress={handleBack} />
          </Header>

          <Animated.View style={[sliderCarsStyleAnimation]}>
            <CarImages>
              <ImageSlider imagesUrl={car.photos} />
            </CarImages>
          </Animated.View>
        </Animated.View>

        <Animated.ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingHorizontal: 24,
            alignItems: "center",
          }}
          onScroll={scrollHandler}
          scrollEventThrottle={16}
        >
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
          <About>{car.about}</About>
          <About>{car.about}</About>
          <About>{car.about}</About>
          <About>{car.about}</About>
          <About>{car.about}</About>
        </Animated.ScrollView>

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
