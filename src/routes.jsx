import { WelcomePage } from "./pages/WelcomePage";
import { Dashboard } from "./pages/dashboard/Dashboard";

const routes = [
    {path: '/*', element: <Dashboard/>},
    {path: '/welcome', element: <WelcomePage/>}

]

export default routes