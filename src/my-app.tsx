import { SignIn } from './domains/auth/modules/signs/pages/sign-in/sign-in.page'
import { AppProvider } from './shared/providers/app-provider'
import { Routes } from './shared/routes'

const MyApp: React.FC = () => {
  return (
     <AppProvider>
      <SignIn />
    </AppProvider>
  )
}

export { MyApp }
