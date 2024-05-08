import { TouchableOpacityProps } from 'react-native';
import { Container, TextButton } from './default-button.styles';

type DefaultButtonProps = TouchableOpacityProps & {
  textButton: string
}

const DefaultButton: React.FC<DefaultButtonProps> = ({ textButton, ...rest }) => {
  return (
    <Container activeOpacity={.95} {...rest}>
      <TextButton font='SEMI_BOLD' size='x16'>
        {textButton}
      </TextButton>
    </Container>
  )
}

export { DefaultButton }