import Home from './Home'

function App() {
  return (
    <div>
      <div className="fixed inset-0 bg-white flex items-center justify-center  z-50 xs:hidden">
        <p className="text-center text-red-600 font-semibold px-4">
          This website is not supported on very small screen sizes. Please use a larger device.
        </p>
      </div>
      <Home/>
    </div>
  )
}

export default App
