
import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { DefaultBackground } from '@app/shared/components/layouts/default-background/default-background.component';
import { KeyboardBackground } from '@app/shared/components/layouts/keyboard-background/keyboard-background.component';
import { HeaderAuth } from '@app/domains/auth/components/header-auth/header-auth.component';
import { AppVersion } from '@app/shared/components/app-version/app-version.component';

import { Container, Content } from './sign-up.styles';
import { ContentSignIn } from '../sign-in/components/content-sign-in/content-sign-in.component';


const SignUp: React.FC = () => {
  const { ...rest } = useForm()

  return (
    <DefaultBackground> 
      <KeyboardBackground>
          <Content>
          <HeaderAuth 
          title='Inscreva-se gratuitamente'
          subTitle='Cadastre-se agora e  comece a destacar seus imoveis no mundo imobiliário.'
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

export default SignUp;