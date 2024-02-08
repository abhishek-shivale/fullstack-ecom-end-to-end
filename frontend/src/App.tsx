import LoginComponent from './pages/login/login'
import RegisterComponent from './pages/register/register'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Navbar from './components/Layout/Navbar'
import Footer from './components/Layout/Footer'
function App() {

  return (
   <Router>
    <Navbar />
      <Routes>
        <Route path='/login' element={<LoginComponent />}/>
        <Route path='/register' element={<RegisterComponent />}/>
      </Routes>
    <Footer />
   </Router>
  )
}

export default App