import "react-native-gesture-handler";
import { StoreProvider, rootStore } from "./src/stores";
import AppNavigator from "./Navigator";

export default function App() {
  return (
    <StoreProvider value={rootStore}>
      <AppNavigator />
    </StoreProvider>
  );
}
