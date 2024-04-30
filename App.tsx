/* eslint-disable camelcase */
import * as SplashScreen from 'expo-splash-screen'

import { useFonts } from 'expo-font'
import { MyApp } from 'app/my-app'

import {
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
} from '@expo-google-fonts/poppins'

SplashScreen.preventAutoHideAsync()

export default function App() {
  const [fontLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
  })

  if (fontLoaded) {
    SplashScreen.hideAsync()
    return <MyApp />
  }
}
