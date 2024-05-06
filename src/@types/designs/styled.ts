import { LIGHT_THEME } from '@app/shared/designs/themes/light-theme'
import 'styled-components/native'

declare module 'styled-components/native' {
  type ThemeType = typeof LIGHT_THEME

  export interface DefaultTheme extends ThemeType {}
}
