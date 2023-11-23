import "react-native-gesture-handler";
import { StoreProvider, rootStore } from "./src/stores";
import AppNavigator from "./Navigator";
import { AppModalProvider } from "./src/components/modals";

export default function App() {
  return (
    <StoreProvider value={rootStore}>
      <AppModalProvider>
        <AppNavigator />
      </AppModalProvider>
    </StoreProvider>
  );
}
