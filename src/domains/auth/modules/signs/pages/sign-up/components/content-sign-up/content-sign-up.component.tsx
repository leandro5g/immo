import { useFormContext } from 'react-hook-form';
import { Container } from './content-sign-up.styles';
import { useCallback } from 'react';
import { DefaultButton } from '@app/shared/components/buttons/default-button/default-button.component';
import { HaveAccount } from '../../../../components/have-account/have-account.component';
import { SignInData } from '../../../../validations/sign-in.validation';
import { FormSignIn } from '../../../sign-in/components/form-sign-in/form-sign-in.component';

const ContentSignUp: React.FC = () => {
  const { handleSubmit } = useFormContext()

  const onSubmit = useCallback((data: SignInData) => {
    console.log(data)
  }, [])

  return (
    <Container>
        <FormSignIn />
        <DefaultButton onPress={handleSubmit(onSubmit)} textButton='Criar conta' />
        <HaveAccount />
    </Container>
  )
}

export { ContentSignUp }