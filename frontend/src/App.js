import {
  createBrowserRouter, 
  createRoutesFromElements,
  Route, 
  RouterProvider} from 'react-router-dom'
import Contact from './pages/Contact'
import Gallery from './pages/Gallery'
import Works from './pages/Works'
import Home from './pages/Home'


//layouts
// import RootLayout from './layouts/RootLayout'
import Navbar from './components/Navbar'
import { Footer } from './components/Footer'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Navbar />}>
        <Route index element={<Home />}></Route>
        <Route path='/works' element={<Works />}></Route>
        <Route path='/gallery' element={<Gallery />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
    </Route> 
  )
)

function App() {
  return (
    <>
    {/* <Navbar /> */}
    <RouterProvider className="routerprovider" router={router} />
    <Footer />
    </>
     
  );
}

export default App;
