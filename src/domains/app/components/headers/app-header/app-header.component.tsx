
import { HeaderBackground } from '@app/shared/components/layouts/header-background/header-background.component';
import { IconPhosphor } from '@app/shared/components/libs/phosphor-icons/phosphor-icons.component';

import { Container, TitleHeader } from './app-header.styles';

const AppHeader: React.FC = () => {
  return (
   <HeaderBackground>
    <Container>
      <TitleHeader size='x24'>
        immo
      </TitleHeader>

      <IconPhosphor icon='Bell' />
    </Container>
   </HeaderBackground>
  )
}

export { AppHeader }