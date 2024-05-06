
import { AppHeader } from '@app/domains/app/components/headers/app-header/app-header.component';
import { TabFilter } from '@app/domains/app/components/filters/tab-filter/tab-filter.component';

import { Container } from './header-home.styles';

const HeaderHome: React.FC = () => {
  return (
   <Container>
    <AppHeader />
    <TabFilter />
   </Container>
  )
}

export { HeaderHome }