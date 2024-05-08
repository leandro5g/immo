import { useCallback, useState } from 'react';
import { TextInputProps } from 'react-native';
import { useTheme } from 'styled-components/native';

import { PhosphorIconsKey } from '@app/@types/models/libs/phosphor-icon';
import { IconPhosphor } from '@app/shared/components/libs/phosphor-icons/phosphor-icons.component';
import { ButtonVoid } from '@app/shared/components/buttons/button-void/button-void.component';

import { Container, ContentIcon, InputStateProps, TextInput } from './input.styles';

export type InputProps = TextInputProps & InputStateProps & {
  icon: PhosphorIconsKey
  pass?: boolean
}

const Input: React.FC<InputProps> = ({ icon, pass, hasError,...rest }) => {
  const { COLORS } = useTheme()
  const [isTextSecurity, setIsTextSecurity] = useState(pass)

  const handleIsTextSecurity = useCallback(() => {
    setIsTextSecurity(oldValue => !oldValue)
  }, [])

  return (
    <Container hasError={hasError}>
        <ContentIcon>
          <IconPhosphor color={COLORS.GRAY[100]} icon={icon} />
        </ContentIcon>

        <TextInput 
        secureTextEntry={isTextSecurity}
          {...rest}/>

      {pass && (
         <ButtonVoid onPress={handleIsTextSecurity}>
            <ContentIcon>
            <IconPhosphor color={COLORS.GRAY[100]} icon={isTextSecurity ? "EyeClosed" : "Eye"} />
            </ContentIcon>
         </ButtonVoid>
      )}
    </Container>
  )
}

export { Input }