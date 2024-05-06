import { DefaultHeader } from '@app/domains/app/components/headers/default-header/default-header.component';

import { Container, Content } from './favorites.styles';
import { CardImmobile } from '@app/domains/app/components/cards/card-immobile/card-immobile.component';

const Favorites: React.FC = () => {
  return (
    <Container>
      <DefaultHeader title='Favoritos' />

      <Content>
        <CardImmobile />
        <CardImmobile />
        <CardImmobile />
      </Content>
    </Container>
  )
}

export { Favorites }