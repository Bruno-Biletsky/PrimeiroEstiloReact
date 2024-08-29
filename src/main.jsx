import { Children, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import App from './App.jsx'
import Error from './routes/Error.jsx'
import Home from './routes/Home.jsx'
import Pag2 from './routes/Pag2.jsx'

//Criando a função BrowserRouter

const router= createBrowserRouter([
  {
    // Chamando elemento pai
    path:'/',element:<App/>,
    errorElement:<Error/>,

    // Chamando elemento filho (somente os da pasta ROUTES)
    children:[
      {path:'/',element:<Home/>},
      {path:'/novapagina', element:<Pag2/>}
      
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
