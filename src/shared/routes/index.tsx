import { NavigationContainer } from "@react-navigation/native"
import { TabRoutes } from "./tab-routes"

const Routes: React.FC = () => {
  return (
    <NavigationContainer>
      <TabRoutes />
    </NavigationContainer>
  )
}

export { Routes }