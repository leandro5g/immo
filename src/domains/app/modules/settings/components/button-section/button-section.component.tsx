import { useTheme } from 'styled-components/native';

import { IconPhosphor } from '@app/shared/components/libs/phosphor-icons/phosphor-icons.component';

import { Container, TextButtonSection } from './button-section.styles';

type ButtonSectionProps = {
  textButton: string; 
  onPress: () => void
}

const ButtonSection: React.FC<ButtonSectionProps> = ({ onPress, textButton }) => {
  const { COLORS } = useTheme()

  return (
    <Container onPress={onPress}>
      <TextButtonSection font='MEDIUM' size='x16'>
        {textButton}
      </TextButtonSection>

      <IconPhosphor color={COLORS.TEXT[100]} icon='CaretRight' />
    </Container>
  )
}

export { ButtonSection }