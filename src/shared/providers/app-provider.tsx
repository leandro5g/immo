import { ReactNode } from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { GestureHandlerRootView } from "react-native-gesture-handler"
import { ThemeProvider } from 'styled-components/native'

import { LIGHT_THEME } from '../designs/themes/light-theme'

const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <ThemeProvider theme={LIGHT_THEME}>{children}</ThemeProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>

  )
}

export { AppProvider }
