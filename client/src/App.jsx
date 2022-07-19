import { Navbar, Footer, Welcome, Admin, Vote, Connect, Result } from "./components";
import { BrowserRouter, Route, Routes } from"react-router-dom"

const App = () => {

  return (
    <BrowserRouter>
      <div className="flex bg-[#1f1c1c]">
        <Navbar />
        <div className="w-full">
          <Connect />
          <Routes>
            <Route path='/' element={<Vote />}/>
            <Route path='/Result' element={<Result />}/>
            <Route path='/Admin' element={<Admin />}/>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
