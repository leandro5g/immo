import { ButtonSection } from '../../../../components/button-section/button-section.component';
import { CardSection } from '../../../../components/card-section/card-section.component';
import { Container } from './support.styles';

const Support: React.FC = () => {
  return (
    <Container>
      <CardSection title='Ajuda & Suporte'>
        <ButtonSection textButton='Termos de uso' onPress={() => {}} />
        <ButtonSection textButton='SAC' onPress={() => {}} />
        <ButtonSection textButton='FAQs' onPress={() => {}} />
      </CardSection>
    </Container>
  )
}

export { Support }