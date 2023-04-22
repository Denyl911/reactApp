import 'react-native-gesture-handler';

import { StatusBar } from 'expo-status-bar';
import { NativeBaseProvider } from 'native-base';
import { useColorScheme } from 'react-native';

import { useLoadedAssets } from './hooks/useLoadedAssets';
import Navigation from './navigation';

export default function App() {
  const isLoadingComplete = useLoadedAssets();
  const colorScheme = useColorScheme();
  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <NativeBaseProvider>
        <Navigation colorScheme={colorScheme} />
        <StatusBar />
      </NativeBaseProvider>
    );
  }
}
