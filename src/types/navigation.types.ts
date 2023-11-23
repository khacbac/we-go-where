import { RouteProp } from "@react-navigation/native";
import { StackScreenProps } from "@react-navigation/stack";

export type RootStackParamList = {
  Login: undefined;
  CardsList: undefined;
  AddCard: undefined;
};

export type AppNavigationProps<T extends keyof RootStackParamList> =
  StackScreenProps<RootStackParamList, T>;

export type AppRouteProps<T extends keyof RootStackParamList> = RouteProp<
  RootStackParamList,
  T
>;
