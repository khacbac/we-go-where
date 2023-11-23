import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { AddCardScreen, CardsListScreen, LoginScreen } from "./src/features";
import { createStackNavigator } from "@react-navigation/stack";
import { RootStackParamList } from "./src/types";
import { StoreProvider, rootStore } from "./src/stores";

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <StoreProvider value={rootStore}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{ headerShown: false }}
          />
          {/* @ts-ignore */}
          <Stack.Screen name="CardsList" component={CardsListScreen} />
          {/* @ts-ignore */}
          <Stack.Screen name="AddCard" component={AddCardScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </StoreProvider>
  );
}
