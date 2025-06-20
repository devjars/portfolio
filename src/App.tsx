
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Home'
import Nav from './components/Nav'
function App() {

  return (
    <Router>
    <div className="fixed inset-0 bg-white flex items-center justify-center z-50 notallowed:hidden">
        <p className="text-center text-red-600 font-semibold px-4">
          This website is not supported on very small screen sizes. Please use a larger device.
        </p>
      </div>
     {/* <Nav/> */}
      <Routes>
        <Route path='/' element={<Home/>} />
      </Routes>
    </Router>
  )
}

export default App
