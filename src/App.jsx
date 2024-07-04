import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home'
import CardContainer from './containers/CardContainer'
import GameContainer from './containers/GameContainer'
import './App.css'
import Navigation from './components/Navigation'

function App() {

  const router = createBrowserRouter(
    [
      {
        path: "/",
        element: <Navigation />,
        children : [
          {
            path: "/home",
            element: <Home />,
          },
          {
            path: "/your-library",
            element: <CardContainer />
          },
          {
            path: "/play",
            element: <GameContainer />
          }
        ]
      }
    ]
  )

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App;
