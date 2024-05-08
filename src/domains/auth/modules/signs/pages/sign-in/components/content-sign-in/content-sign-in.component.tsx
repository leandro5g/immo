import { useCallback } from 'react';
import { useFormContext } from 'react-hook-form';
import { SignInData } from '@app/domains/auth/modules/signs/validations/sign-in.validation';

import { HaveAccount } from '@app/domains/auth/modules/signs/components/have-account/have-account.component';
import { FormSignIn } from '../form-sign-in/form-sign-in.component';
import { DefaultButton } from '@app/shared/components/buttons/default-button/default-button.component';

import { Container } from './content-sign-in.styles';

const ContentSignIn: React.FC = () => {
  const { handleSubmit } = useFormContext<SignInData>()

  const onSubmit = useCallback((data: SignInData) => {
    console.log(data)
  }, [])

  return (
    <Container>
        <FormSignIn />
        <DefaultButton onPress={handleSubmit(onSubmit)} textButton='Login' />
        <HaveAccount hasFromLogin />
    </Container>
  )
}

export { ContentSignIn }