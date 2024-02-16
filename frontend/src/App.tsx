import LoginComponent from './pages/login/login'
import RegisterComponent from './pages/register/register'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Navbar from './components/Layout/Navbar'
import Footer from './components/Layout/Footer'
import Home from './pages/Users/Home'
import Cart from './pages/Users/Cart'
import Profile from './pages/Users/Profile'
import Search from './pages/Users/Search'

function App() {

  return (
   <Router>
    <Navbar />
      <Routes>
        <Route path='/login' element={<LoginComponent />}/>
        <Route path='/register' element={<RegisterComponent />}/>
        <Route path='/' element={<Home />} />
        <Route path='/user/cart' element={<Cart />}/>
        <Route path='/user/me' element={<Profile />}/>
        <Route path='/search' element={<Search />}/>

        {/* {ADMIN ROUTES} */}

      </Routes>
    <Footer />
   </Router>
  )
}

export default App