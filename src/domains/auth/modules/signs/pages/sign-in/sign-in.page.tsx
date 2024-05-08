
import { DefaultBackground } from '@app/shared/components/layouts/default-background/default-background.component';
import { HeaderAuth } from '@app/domains/auth/components/header-auth/header-auth.component';
import { DefaultInput } from '@app/shared/components/forms/default-input/default-input.component';
import { DefaultButton } from '@app/shared/components/buttons/default-button/default-button.component';
import { AppVersion } from '@app/shared/components/app-version/app-version.component';

import { Container } from './sign-in.styles';
import { HaveAccount } from '../../components/have-account/have-account.component';

const SignIn: React.FC = () => {
  return (
    <DefaultBackground> 
      <HeaderAuth />
      <Container>
        <DefaultInput />
        <DefaultInput />

        <DefaultButton textButton='Login' />
        <HaveAccount />
        <AppVersion />
      </Container>
    </DefaultBackground>
  )
}

export { SignIn }