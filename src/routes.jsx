import { DetailsPublication }  from "./components/DetailsPublication";
import { PublicationsPage } from "./pages/PublicationsPage";
import { WelcomePage } from "./pages/WelcomePage";
import { Dashboard } from "./pages/dashboard/Dashboard";

const routes = [
    {path: '/*', element: <Dashboard/>},
    {path: '/', element: <WelcomePage/>},
    {path: '/publication', element: <PublicationsPage/>},
    {path: '/publication/:id', element: <DetailsPublication/>}

]

export default routes