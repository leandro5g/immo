import { Keyboard, Platform } from 'react-native';
import { PropsWithChildren, useCallback } from 'react';

import { KeyboardAvoidingView, TouchableHighlight } from './keyboard-background.styles';

const KeyboardBackground: React.FC<PropsWithChildren> = ({ children }) => {

  const onPress = useCallback(() => {
    Keyboard.dismiss()
  }, [])

  return (

      <TouchableHighlight activeOpacity={1} onPress={onPress}>
        <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : undefined}>
        {children}
        </KeyboardAvoidingView>
      </TouchableHighlight>
  )
}

export { KeyboardBackground }