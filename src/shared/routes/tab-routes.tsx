import { BottomTabBarProps, createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Home } from "app/domains/logged/modules/home/pages/home/home.page"
import { useCallback } from "react"
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
      <Screen name="favorite" component={Home} />
      <Screen name="setting" component={Home} />
    </Navigator>
  )
}

export { TabRoutes }

