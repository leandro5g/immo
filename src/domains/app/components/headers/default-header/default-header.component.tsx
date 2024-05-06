import { HeaderBackground } from '@app/shared/components/layouts/header-background/header-background.component';

import { Container, TitleHeader } from './default-header.styles';

const DefaultHeader: React.FC<{ title: string }> = ({ title }) => {
  return (
    <HeaderBackground>
      <Container>
        <TitleHeader size='x18' font='SEMI_BOLD'>
          {title}
        </TitleHeader>
      </Container>
    </HeaderBackground>
  )
}

export { DefaultHeader }