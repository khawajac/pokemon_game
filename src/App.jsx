import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

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
            element: <CardList />
          },
          {
            path: "/play",
            element: <Game />
          }
        ]
      }
    ]
  )

  return (
    <>
      <h1>Pokemon Game</h1>
      <RouterProvider router={router} />
    </>
  )
}

export default App;
