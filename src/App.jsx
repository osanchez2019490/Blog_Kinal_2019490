import { useRoutes } from 'react-router-dom';
import './App.css'
import { Toaster } from "react-hot-toast";


function App() {

    let element = useRoutes(routes);
    return (
        <>
            {element}
            <Toaster position="bottom-right" reverseOrder={false} />
        </>
    );
};

export default App
