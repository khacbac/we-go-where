import "react-native-gesture-handler";
import { StoreProvider, rootStore } from "./src/stores";
import AppNavigator from "./Navigator";
import { AppModalProvider } from "./src/components/modals";
//@ts-ignore
import Omise from "omise-react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
Omise.config("pkey_test_5wvisbxphp1zapg8ie6", "2017-11-12");

export default function App() {
  return (
    <SafeAreaProvider>
      <StoreProvider value={rootStore}>
        <AppModalProvider>
          <AppNavigator />
        </AppModalProvider>
      </StoreProvider>
    </SafeAreaProvider>
  );
}
