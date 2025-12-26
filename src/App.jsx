import { useRoutes } from "react-router-dom"
import Layout from "./pages/Layout"
import AddCreator from "./pages/AddCreator"
import EditCreator from "./pages/EditCreator"
import ShowCreators from "./pages/ShowCreators"
import ViewCreator from "./pages/ViewCreator"
import Hero from "./pages/Hero"
import NotFound from "./pages/NotFound"
import { Toaster } from "react-hot-toast"

function App() {

  const routes = useRoutes([
    { path: "/", element: <Hero /> },
    {element: <Layout />, children: [
        { path: "/creators", element: <ShowCreators /> },
        { path: "/creator/:id", element: <ViewCreator /> },
        { path: "/edit/:id", element: <EditCreator /> },
        { path: "/add", element: <AddCreator /> },
        {path: "*", element: <NotFound />} ],
    },
    {path: "*", element: <NotFound />}
  ]);

  return (
    <>
    <Toaster position="top-center" />
      {routes}
    </>
  )
}

export default App
