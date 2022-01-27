import React from "react";

import { Home } from "../screens/Home";
import { MyCars } from "../screens/MyCars";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AppStackRoutes } from "./app.stack.routes";

const { Screen, Navigator } = createBottomTabNavigator();

export function AppTabRoutes() {
  return (
    <Navigator>
      <Screen
        name="Home"
        component={AppStackRoutes}
        options={{ headerShown: false }}
      />
      <Screen
        name="Profile"
        component={Home}
        options={{ headerShown: false }}
      />
      <Screen
        name="MyCars"
        component={MyCars}
        options={{ headerShown: false }}
      />
    </Navigator>
  );
}
