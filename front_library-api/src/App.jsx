import './App.css'
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import "./App.css";
import { HomePage } from './pages/HomePage';

function App() {
  
  const router = createBrowserRouter([
    {path: "",
      element: <Root/>,
      errorElement : <p>Erreur de chargement...</p>,
      children: [
        // Afficher les produits sur la page d'accueil
        { path: "", element:<HomePage/> }
      ],
    },
  ]);
  
  function Root(){
    return(
      <>
        {/* <NavBar/> */}
        <Outlet/>
      </>
    )
  }
  return <RouterProvider router={router} />;
}

export default App;
