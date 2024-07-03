import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home'
import CardContainer from './containers/CardContainer'
import GameContainer from './containers/GameContainer'
import Navigation from './components/Navigation'
import './App.css'

function App() {

  const router = createBrowserRouter(
    [
      {
        path: "/",
        element: <Navigation />,
        children : [
          {
            path: "/home",
            element: <Home />
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
