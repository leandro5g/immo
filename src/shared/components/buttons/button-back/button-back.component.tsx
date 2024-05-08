
import { useTheme } from 'styled-components/native';
import { IconPhosphor } from '../../libs/phosphor-icons/phosphor-icons.component';

import { Container } from './button-back.styles';

const ButtonBack: React.FC = () => {
  const { COLORS } = useTheme()
  
  return (
    <Container>
      <IconPhosphor 
        sizeIcon='x20'
        icon='ArrowLeft'
        color={COLORS.TEXT[100]}
      />
    </Container>
  )
}

export { ButtonBack }