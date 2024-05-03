
import { PropsWithChildren } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Container, HEADER_HEIGHT } from './header-background.styles';

const HeaderBackground: React.FC<PropsWithChildren> = ({ children }) => {
  const { top } = useSafeAreaInsets()

  return (
    <Container style={{ height: HEADER_HEIGHT + top, paddingTop: top }}>
      {children}
    </Container>
  )
}

export { HeaderBackground }