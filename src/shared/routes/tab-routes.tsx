import { useCallback } from "react"
import { BottomTabBarProps, createBottomTabNavigator } from "@react-navigation/bottom-tabs"

import { Home } from "@app/domains/app/modules/home/pages/home/home.page"
import { Settings } from "@app/domains/app/modules/settings/pages/settings/settings.page"
import { Favorites } from "@app/domains/app/modules/favorites/pages/favorites/favorites.page"

import { CustomTabBar } from "./components/custom-tab-bar/custom-tab-bar.component"

const { Navigator, Screen } = createBottomTabNavigator()

const TabRoutes: React.FC = () => {
  const renderTabBar = useCallback((props: BottomTabBarProps) => {
    return <CustomTabBar {...props} />
  }, [])

  return (
    <Navigator
      screenOptions={{
        headerShown: false
      }}
      tabBar={renderTabBar}
    >
      <Screen name="house" component={Home} />
      <Screen name="favorite" component={Favorites} />
      <Screen name="setting" component={Settings} />
    </Navigator>
  )
}

export { TabRoutes }

