import { Stack } from "expo-router";
import { AppProvider } from './appProvider'
export default function RootLayout() {
  return (
      <AppProvider>
        <Stack />
      </AppProvider>
    );
}
