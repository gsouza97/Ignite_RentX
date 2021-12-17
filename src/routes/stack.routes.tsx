import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "../screens/Home";
import { CarDetails } from "../screens/CarDetails";
import { Schedule } from "../screens/Schedule";
import { ScheduleDetails } from "../screens/ScheduleDetails";
import { ScheduleCompleted } from "../screens/ScheduleCompleted";

const { Screen, Navigator } = createNativeStackNavigator();

export function StackRoutes() {
  return (
    <Navigator>
      <Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Screen
        name="CarDetails"
        component={CarDetails}
        options={{ headerShown: false }}
      />
      <Screen
        name="Schedule"
        component={Schedule}
        options={{ headerShown: false }}
      />
      <Screen
        name="ScheduleDetails"
        component={ScheduleDetails}
        options={{ headerShown: false }}
      />
      <Screen
        name="ScheduleCompleted"
        component={ScheduleCompleted}
        options={{ headerShown: false }}
      />
    </Navigator>
  );
}
