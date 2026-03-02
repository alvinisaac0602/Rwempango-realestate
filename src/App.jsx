import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Realestate from './pages/Realestate'
import Finance from './pages/Finance'
import Agriculture from './pages/Agriculture'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <Router>
      <Header />
      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/realestate' element={<Realestate />} />
        <Route path='/finance' element={<Finance />} />
        <Route path='/agriculture' element={<Agriculture />} />
      </Routes>

      <Footer />
    </Router>
  )
}

export default App