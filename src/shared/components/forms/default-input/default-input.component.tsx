import { Control, Controller, useFormContext } from 'react-hook-form';

import { InputProps, Input } from './modules/input/input.module';

import { Container, LabelInput, TextError } from './default-input.styles';

type DefaultInputProps = InputProps & {
  label: string
  name: string
}

const DefaultInput: React.FC<DefaultInputProps> = ({ name, label, ...rest }) => {
  const { control, formState: { errors } } = useFormContext()
  
  const errorField = errors?.[name]?.message as string

  return (
    <Container>
      <LabelInput font='MEDIUM' size='x14'>
        {label}
      </LabelInput>

      <Controller 
      name={name}
        control={control}
        render={({ field: { value, onChange } }) => (
          <Input 
            hasError={!!errorField}
            value={value}
            onChangeText={onChange}
            {...rest}
          />
        )}
      />

      {errorField && (
        <TextError font='MEDIUM' size='x12'>
        {errorField}
        </TextError>
      )}

    </Container>
  )
}

export { DefaultInput }