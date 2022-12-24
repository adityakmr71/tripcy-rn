import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text } from "react-native";
import Dashboard from "./src/screens/Dashboard/Dashboard";
import Onboarding from "./src/screens/Onboarding/Onboarding";

import TabNavigation from "./src/navigation/TabNavigation";
import { createTheme, ThemeProvider } from "@rneui/themed";
import { theme } from "./src/theme/theme";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="dashboard">
          <Stack.Screen
            options={{ headerShown: false }}
            name="onboarding"
            component={Onboarding}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="dashboard"
            component={TabNavigation}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}
