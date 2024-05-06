import { RoomsImmobile } from '@app/shared/components/info-immobile/rooms-immobile/rooms-immobile.component'
import { Container } from './card-immobile.styles'
import { BannerImmobile } from './modules/banner-immobile/banner-immobile.module'
import { InfoImmobile } from './modules/info-immobile/info-immobile.module'

const CardImmobile: React.FC = () => {
  return (
    <Container>
      <BannerImmobile />
      <InfoImmobile />
      <RoomsImmobile />
    </Container>
  )
}

export { CardImmobile }
