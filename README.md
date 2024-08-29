Criando react-router-dom (usando -> "npm i react-router-dom" no terminal)
No main -> import {createBrowserRouter,RouterProvider} from 'react-router-dom'
No main -> Fazer o RouterProvider chamar o app e qualquer outro COM PROPS ->"<RouterProvider router={router}/>"
obs: método (), array[], objeto{}
No main -> criando função de renderização -> const router= createBrowserRouter([
                                                {
                                                    // Chamando elemento pai
                                                    path:'/',element:<App/>,
                                                    errorElement:<Error/>,

                                                    // Chamando elemento filho (somente os da pasta ROUTES)
                                                    Children:[
                                                    {path:'/',element:<Home/>},
                                                    ]
                                                }
                                                ])
No Main -> importar TODOS os elements routes e criar o path (var de validação) que chamará o element:<Xyz/>
No App -> import {Outlet} from 'react-router-dom' (permitir renderização)
No App -> Chamar os components (Não possuem rota) com import + <Xyz/>
No terminal -> instalar o "npm i styled-components"
No Src -> criar pasta css que receberá arquivos ElementoStyle.jsx (Estilização por componente)
No Nav -> criar <NavStyle></NavStyle> -> colocar dentro section que será chamada no NavStyle -> usar class name nos elementos-> que será chamada como .className no NavStyle