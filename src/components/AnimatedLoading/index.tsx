import React from "react";

import { Container } from "./styles";

import LottieView from "lottie-react-native";
import loadingCar from "../../assets/loadingCar.json";

export function AnimatedLoading() {
  return (
    <Container>
      <LottieView
        autoPlay
        source={loadingCar}
        style={{ height: 200 }}
        resizeMode="contain"
        loop
      />
    </Container>
  );
}
