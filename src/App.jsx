import './App.css'
import Header from './pages/Header'
import Home from './pages/Home'
import About from './pages/About'
import Gallery from './pages/Gallery';
import { Route, createRoutesFromElements, RouterProvider, createHashRouter } from 'react-router-dom';
// import { HashRouter } from 'react-router-dom';
import ErrorPage from './error-page';


function App() {

  const router = createHashRouter(
    createRoutesFromElements(
      <Route path='/' element={<Header />} errorElement={<ErrorPage/>}>
        <Route index element={<Home />}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/gallery" element={<Gallery/>}/>
      </Route>
    )
  )

  // React has 2 ways to make router one is like the above 

  // const router = createHashRouter([
  //   {
  //     path: "/",
  //     element: <Home/>,
  //     errorElement: <ErrorPage/>,
  //   },
  //   {
  //     path: "/about", 
  //     element: <About/>
  //   },
  //   {
  //     path: "/gallery", 
  //     element: <Gallery/>
  //   }
  // ]);

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App

