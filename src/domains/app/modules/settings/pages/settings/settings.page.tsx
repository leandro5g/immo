
import { AppVersion } from '../../../../../../shared/components/app-version/app-version.component';
import { DefaultHeader } from '@app/domains/app/components/headers/default-header/default-header.component';
import { ContentSettings } from './components/content-settings/content-settings.component';

import { Container } from './settings.styles';

const Settings: React.FC = () => {
  return (
    <Container>
      <DefaultHeader title='Configurações' />
      <ContentSettings />
      <AppVersion />
    </Container>
  )
}

export { Settings }