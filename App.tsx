import "react-native-gesture-handler";
import { StoreProvider, rootStore } from "./src/stores";
import AppNavigator from "./Navigator";
import { AppModalProvider } from "./src/components/modals";
//@ts-ignore
import Omise from "omise-react-native";
Omise.config("pkey_test_5wvisbxphp1zapg8ie6", "2017-11-12");

export default function App() {
  return (
    <StoreProvider value={rootStore}>
      <AppModalProvider>
        <AppNavigator />
      </AppModalProvider>
    </StoreProvider>
  );
}
