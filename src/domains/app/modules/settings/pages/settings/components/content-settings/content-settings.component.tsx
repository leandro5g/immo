import { CardCreateAccount } from '../card-create-account/card-create-account.component';
import { General } from '../general/general.component';
import { Support } from '../support/support.component';

import { Container } from './content-settings.styles';

const ContentSettings: React.FC = () => {
  return (
    <Container>
      <CardCreateAccount />
      <General />
      <Support />
    </Container>
  )
}

export { ContentSettings }