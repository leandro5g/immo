import { ReactNode } from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { GestureHandlerRootView } from "react-native-gesture-handler"
import { ThemeProvider } from 'styled-components/native'
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet'

import { LIGHT_THEME } from '../designs/themes/light-theme'

const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <BottomSheetModalProvider>
          <ThemeProvider theme={LIGHT_THEME}>{children}</ThemeProvider>
        </BottomSheetModalProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>

  )
}

export { AppProvider }
