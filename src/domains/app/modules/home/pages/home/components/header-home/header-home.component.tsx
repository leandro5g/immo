
import { HeaderBackground } from '@app/shared/components/layouts/header-background/header-background.component';
import { Container, TitleHeader } from './header-home.styles';
import { IconPhosphor } from '@app/shared/components/libs/phosphor-icons/phosphor-icons.component';

const HeaderHome: React.FC = () => {
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

export { HeaderHome }