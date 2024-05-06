import { General } from '../general/general.component';
import { Support } from '../support/support.component';

import { Container } from './content-settings.styles';

const ContentSettings: React.FC = () => {
  return (
    <Container>
      <General />
      <Support />
    </Container>
  )
}

export { ContentSettings }