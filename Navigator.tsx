import { NavigationContainer } from "@react-navigation/native";
import { AddCardScreen, CardsListScreen, LoginScreen } from "./src/features";
import { createStackNavigator } from "@react-navigation/stack";
import { RootStackParamList } from "./src/types";
import { useStore } from "./src/stores";
import { observer } from "mobx-react-lite";

const Stack = createStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  const { authStore } = useStore();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {!authStore.accessToken && (
          <Stack.Group navigationKey="Guest">
            <Stack.Screen
              name="Login"
              component={LoginScreen}
              options={{ headerShown: false }}
            />
          </Stack.Group>
        )}
        {!!authStore.accessToken && (
          <Stack.Group navigationKey="User">
            {/* @ts-ignore */}
            <Stack.Screen name="CardsList" component={CardsListScreen} />
            {/* @ts-ignore */}
            <Stack.Screen name="AddCard" component={AddCardScreen} />
          </Stack.Group>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default observer(AppNavigator);
