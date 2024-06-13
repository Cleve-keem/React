import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom';
// layout root wrapper
import Layout from './Layout';
// pages
import Home from './Home';
// import Navbar from './Navbar';
// import Blog from './Blog';

const  router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={ <Layout /> }>
      <Route index element={ <Home /> } />
    </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
