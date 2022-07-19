import { Navbar, Footer, Welcome, Services, Connect } from "./components";
import { BrowserRouter, Route, Routes } from"react-router-dom"

const App = () => {

  return (
    <BrowserRouter>
      <div className="flex bg-[#1f1c1c]">
        <Navbar />
        <div className="w-full">
          <Connect />
          <Services />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
