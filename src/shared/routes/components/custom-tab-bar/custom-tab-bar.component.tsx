
import { useCallback } from 'react';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';

import { TabBarItem } from '../tab-bar-item/tab-bar-item.component';

import { Container, TAB_HEIGHT } from './custom-tab-bar.styles';

const CustomTabBar: React.FC<BottomTabBarProps> = ({ state, descriptors, navigation, insets }) => {

  return (
    <Container style={{ height: insets.bottom + TAB_HEIGHT, paddingBottom: insets.bottom }}>
      {state.routes.map((route, index) => {        
        const isFocused = state.index === index

        const onPress = useCallback(() => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          })

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name)
          }
        }, [isFocused, route.key, route.name, navigation])

        return (
          <TabBarItem
            key={route.key}
            name={route.name}
            isFocused={isFocused}
            onPress={onPress}
          />
        )
      })}
    </Container>
  )
}

export { CustomTabBar }