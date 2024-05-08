import { DefaultText } from '@app/shared/components/texts/default-text/default-text.component';
import { ButtonVoid } from '@app/shared/components/buttons/button-void/button-void.component';

import { Container } from './have-account.styles';

const HaveAccount: React.FC<{ hasFromLogin?: boolean }> = ({ hasFromLogin }) => {
  const initialText = hasFromLogin ? "Não" : "Já"
  const buttonText = hasFromLogin ? "Cadrastrar-se" : "Entrar"

  return (
    <Container>
      <DefaultText font='REGULAR' size='x14'>
       {initialText} possui uma conta?
      </DefaultText>
      <ButtonVoid>
      <DefaultText font='SEMI_BOLD' size='x14'>
        {" "} {buttonText}
      </DefaultText>
      </ButtonVoid>
    </Container>
  )
}

export { HaveAccount }