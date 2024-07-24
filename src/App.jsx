import './App.css'
import Landing from './pages/Landing'
import Productpage from './pages/Productpage'
import { Route, HashRouter as Router, Routes } from 'react-router-dom'


function App() {

  return (
    <Router>
      <Routes>
     <Route exact path="/" element={<Landing/>} />
     <Route exact path="/products" element={<Productpage/>} />
     </Routes>
    </Router>
  )
}

export default App
