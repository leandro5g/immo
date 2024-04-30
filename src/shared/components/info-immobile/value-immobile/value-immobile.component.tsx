import { DefaultText } from '../../texts/default-text/default-text.component'

import { Container, TextValue } from './value-immobile.styles'

const ValueImmobile: React.FC = () => {
  return (
    <Container>
      <TextValue size="x18">R$ 500,00</TextValue>
      <DefaultText size="x12" variant="P1">
        /Mês
      </DefaultText>
    </Container>
  )
}

export { ValueImmobile }
