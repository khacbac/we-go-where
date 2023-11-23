import "react-native-gesture-handler";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { AddCardScreen, CardsListScreen } from "./src/features";
import { createStackNavigator } from "@react-navigation/stack";
import { RootStackParamList } from "./src/types";
import { StoreProvider, rootStore } from "./src/stores";

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <StoreProvider value={rootStore}>
      <NavigationContainer>
        <Stack.Navigator>
          {/* @ts-ignore */}
          <Stack.Screen name="CardsList" component={CardsListScreen} />
          {/* @ts-ignore */}
          <Stack.Screen name="AddCard" component={AddCardScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </StoreProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
