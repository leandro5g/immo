
import { ImageBackground, ScrollView } from 'react-native'

import { CardImmobile } from '@app/domains/app/components/cards/card-immobile/card-immobile.component'
import { HeaderHome } from './components/header-home/header-home.component'
import Image from "../../assets/bg-header/light/bg-header-light.png"
import { Container, Content } from "./home.style"
import { TabFilter } from '@app/domains/app/components/filters/tab-filter/tab-filter.component'

const Home: React.FC = () => {
  return (
    <Container>
      
    <ImageBackground source={Image}>
    <HeaderHome />
      <TabFilter />
    </ImageBackground>

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
