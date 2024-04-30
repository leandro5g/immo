import { ReactNode } from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { ThemeProvider } from 'styled-components/native'
import { LIGHT_THEME } from '../designs/themes/light-theme'

const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <SafeAreaProvider>
      <ThemeProvider theme={LIGHT_THEME}>{children}</ThemeProvider>
    </SafeAreaProvider>
  )
}

export { AppProvider }
