import { NavigationContainer } from "@react-navigation/native";
import { AddCardScreen, CardsListScreen, LoginScreen } from "./src/features";
import { createStackNavigator } from "@react-navigation/stack";
import { RootStackParamList } from "./src/types";
import { useStore } from "./src/stores";
import { observer } from "mobx-react-lite";
import { AppIcon } from "./src/components";
import { View, Pressable, Animated, StyleProp, TextStyle } from "react-native";
import { Icons } from "./src/assets";

const Stack = createStackNavigator<RootStackParamList>();
const headerTitleStyle: Animated.WithAnimatedValue<StyleProp<TextStyle>> = {
  fontSize: 17,
  lineHeight: 23,
  fontWeight: "700",
};
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
            <Stack.Screen
              name="CardsList"
              component={CardsListScreen}
              options={{
                headerTitleStyle,
                headerTitle: "Cards",
              }}
            />
            <Stack.Screen
              name="AddCard"
              // @ts-ignore
              component={AddCardScreen}
              options={{
                headerTitle: "",
                headerTitleStyle,
              }}
            />
          </Stack.Group>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default observer(AppNavigator);
