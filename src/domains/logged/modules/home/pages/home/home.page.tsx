import { CardImmobile } from 'app/domains/logged/components/cards/card-immobile/card-immobile.component'
import { DefaultBackground } from 'app/shared/components/layouts/default-background/default-background.component'

const Home: React.FC = () => {
  return (
    <DefaultBackground>
      <CardImmobile />
      <CardImmobile />
      <CardImmobile />
      <CardImmobile />
    </DefaultBackground>
  )
}

export { Home }
