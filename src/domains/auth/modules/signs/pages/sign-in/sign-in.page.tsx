import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from "@hookform/resolvers/zod"
import { signInValidation } from '../../validations/sign-in.validation';

import { DefaultBackground } from '@app/shared/components/layouts/default-background/default-background.component';
import { HeaderAuth } from '@app/domains/auth/components/header-auth/header-auth.component';
import { AppVersion } from '@app/shared/components/app-version/app-version.component';
import { ContentSignIn } from './components/content-sign-in/content-sign-in.component';
import { KeyboardBackground } from '@app/shared/components/layouts/keyboard-background/keyboard-background.component';

import { Container, Content } from './sign-in.styles';

const SignIn: React.FC = () => {
  const { ...rest } = useForm({
    resolver: zodResolver(signInValidation)
  })

  return (
    <DefaultBackground> 
      <KeyboardBackground>
          <Content>
          <HeaderAuth 
          title='Entrar'
          subTitle='Entre com sua conta immo e comece a cadastrar e gerenciar seus imoves em nossa plataforma.'
          />

          <Container>
            <FormProvider {...rest}>
              <ContentSignIn />
            </FormProvider>

            <AppVersion />
          </Container>
        </Content>
      </KeyboardBackground>
    </DefaultBackground>
  )
}

export { SignIn }