import { ButtonSection } from '../../../../components/button-section/button-section.component';
import { CardSection } from '../../../../components/card-section/card-section.component';

import { Container } from './general.styles';

const General: React.FC = () => {
  return (
    <Container>
      <CardSection title='Geral'>
        <ButtonSection textButton='Notificações' onPress={() => {}} />
        <ButtonSection textButton='Localização' onPress={() => {}} />
      </CardSection>
    </Container>
  )
}

export { General }