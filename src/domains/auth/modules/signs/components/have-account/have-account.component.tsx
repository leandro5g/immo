import { DefaultText } from '@app/shared/components/texts/default-text/default-text.component';
import { Container } from './have-account.styles';
import { ButtonVoid } from '@app/shared/components/buttons/button-void/button-void.component';

const HaveAccount: React.FC = () => {
  return (
    <Container>
      <DefaultText font='REGULAR' size='x14'>
        Doesn’t have an account?
      </DefaultText>
      <ButtonVoid>
      <DefaultText font='SEMI_BOLD' size='x14'>
        {" "}Sign up
      </DefaultText>
      </ButtonVoid>
    </Container>
  )
}

export { HaveAccount }