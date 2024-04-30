import { RoomInmobile } from './modules/room-inmobile/room-inmobile.module'
import { Container } from './rooms-immobile.styles'

const RoomsImmobile: React.FC = () => {
  return (
    <Container>
      <RoomInmobile count={20} key="SQUARE" icon="ArrowsOut" />
      <RoomInmobile count={3} key="ROOM" icon="Bed" />
      <RoomInmobile count={2} key="BATH" icon="Toilet" />
    </Container>
  )
}

export { RoomsImmobile }
