import { Container, TextButton } from './default-button.styles';

const DefaultButton: React.FC<{ textButton: string }> = ({ textButton }) => {
  return (
    <Container>
      <TextButton font='SEMI_BOLD' size='x16'>
        {textButton}
      </TextButton>
    </Container>
  )
}

export { DefaultButton }