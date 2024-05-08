
import { APP_VERSION } from '@app/shared/config/constants/app-version';

import { Container, TextVersion } from './app-version.styles';

const AppVersion: React.FC = () => {
  return (
    <Container>
      <TextVersion size='x12' font='REGULAR'>
        Versão {APP_VERSION}
      </TextVersion>
    </Container>
  )
}

export { AppVersion }