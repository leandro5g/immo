import { DefaultText } from 'app/shared/components/texts/default-text/default-text.component'
import { ValueImmobile } from 'app/shared/components/info-immobile/value-immobile/value-immobile.component'

import {
  Container,
  ContentLocation,
  IconLocation,
  Content,
} from './info-immobile.styles'

const InfoImmobile: React.FC = () => {
  return (
    <Container>
      <Content>
        <DefaultText size="x16">Star Sun Apartment</DefaultText>
        <ContentLocation>
          <IconLocation name="location-on" />
          <DefaultText variant="P1">Jl Letda Nasir 45 RT 001/02</DefaultText>
        </ContentLocation>
      </Content>

      <ValueImmobile />
    </Container>
  )
}

export { InfoImmobile }
