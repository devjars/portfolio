import Home from './Home'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import { lazy, Suspense, useEffect, useState } from 'react'
const Projects = lazy(()=>import("./pages/Projects"))
function App() {
  const [width,setwidth] = useState(window.innerWidth)

  useEffect(()=>{
    const handleResize = ()=> setwidth(window.innerWidth)

    window.addEventListener('resize', handleResize)

    return ()=> window.removeEventListener('resize',handleResize)
  },[])

  if(width < 320){
    return <div className="fixed inset-0 bg-white flex items-center justify-center  z-50 ">
        <p className="text-center text-red-600 font-semibold px-4">
          This website is not supported on very small screen sizes. Please use a larger device.
        </p>
      </div>
  }
  return (
    <div>
    
    
      <Router>
       <Suspense fallback={<div className='w-screen h-screen flex justify-center items-center'><span className="loading loading-bars loading-xl"></span></div>}>
         <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/work' element={<Projects/>} />

        </Routes>
       </Suspense>
      </Router>
      
    </div>
  )
}

export default App
