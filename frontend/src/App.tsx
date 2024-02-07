import LoginComponent from './components/login/login'
import RegisterComponent from './components/register/register'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
function App() {

  return (
   <Router>
    <Routes>
      <Route path='/login' element={<LoginComponent />}/>
      <Route path='/register' element={<RegisterComponent />}/>
    </Routes>
   </Router>
  )
}

export default App