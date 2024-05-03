import { useEffect } from 'react';
import { interpolate, useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import { useTheme } from 'styled-components/native';

import { ViewAnimated } from 'app/shared/components/libs/animated-component/animated-component.component';
import { IconPhosphor } from 'app/shared/components/libs/phosphor-icons/phosphor-icons.component';

import { MAP_TAB_BAR } from 'app/shared/config/constants/map-tab-bar';

export type TabIconProps = {
  isFocused: boolean;
  name: keyof typeof MAP_TAB_BAR
}

const START_ROTATE = 1
const END_ROTATE = 1.3

const TabIcon: React.FC<TabIconProps> = ({ isFocused, name }) => {
  const { COLORS } = useTheme()

  const scale = useSharedValue(1)

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      { scale: interpolate(scale.value, [START_ROTATE, END_ROTATE], [START_ROTATE, END_ROTATE]) },
    ],
  }))

  useEffect(() => {
    if (isFocused) {
      scale.value = withSpring(END_ROTATE)

    } else {
      scale.value = withSpring(START_ROTATE)
    }
  }, [isFocused])

  return (
    <ViewAnimated style={animatedStyle}>
      <IconPhosphor 
          icon={MAP_TAB_BAR[name]}
          color={isFocused ? COLORS.DEFAULT.WHITE : COLORS.GRAY[100]}
          sizeIcon='x20'
          propsIcon={{
            weight: isFocused ? "fill" : "regular"
          }}
        />
    </ViewAnimated>
  )
}

export { TabIcon }