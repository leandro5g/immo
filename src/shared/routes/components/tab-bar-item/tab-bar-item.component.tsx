import { TabCardFocus } from './modules/tab-card-focus/tab-card-focus.module';
import { TabIcon, TabIconProps } from './modules/tab-icon/tab-icon.module';

import { Container } from './tab-bar-item.styles';

type TabBarItemProps = TabIconProps & {
  onPress(): void;
}

const TabBarItem: React.FC<TabBarItemProps> = ({ isFocused, onPress, name }) => {
  return (
    <Container onPress={onPress}>
      {isFocused && <TabCardFocus />}
      <TabIcon isFocused={isFocused} name={name} />
    </Container>
  )
}

export { TabBarItem }