
import { ScrollView } from 'react-native'

import { CardImmobile } from '@app/domains/app/components/cards/card-immobile/card-immobile.component'
import { HeaderHome } from './components/header-home/header-home.component'

import { Container, Content } from "./home.style"

const Home: React.FC = () => {
  return (
    <Container>
    <HeaderHome />

     <ScrollView showsVerticalScrollIndicator={false}>
      <Content>
      <CardImmobile />
      <CardImmobile />
      <CardImmobile />
      <CardImmobile />
      </Content>
     </ScrollView>
    </Container>
  )
}

export { Home }
