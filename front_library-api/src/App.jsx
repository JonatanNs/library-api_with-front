import './App.css'

function App() {
  
  const router = createBrowserRouter([
    {path: "",
      element: <Root/>,
      errorElement : <p>Erreur de chargement...</p>,
      children: [
        // Afficher les produits sur la page d'accueil
        { path: "", element: <h1>Accueil</h1> }
      ],
    },
  ]);
  
  function Root(){
    return(
      <>
        <NavBar/>
        <Outlet/>
      </>
    )
  }
  return <RouterProvider router={router} />;
}

export default App;
