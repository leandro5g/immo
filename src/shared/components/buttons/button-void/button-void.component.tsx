import { TouchableOpacityProps } from "react-native";

import { Button } from './button-void.styles';

const ButtonVoid: React.FC<TouchableOpacityProps> = ({ ...rest }) => {
  return (
    <Button activeOpacity={1} {...rest} />
  )
}

export { ButtonVoid }