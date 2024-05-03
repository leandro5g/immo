import { ZoomIn, ZoomOut } from 'react-native-reanimated';
import { Container } from './tab-card-focus.styles';

const TabCardFocus: React.FC = () => {
  return (
    <Container entering={ZoomIn.duration(300)} exiting={ZoomOut.duration(300)} />
  )
}

export { TabCardFocus }