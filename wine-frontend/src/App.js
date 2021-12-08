// css
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

// router
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// components
import HomePage from './pages/HomePage.js'
import WinePage from './pages/WinePage.js'
// import AddWinePage from './pages/AddWinePage.js'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/wines/" element={<HomePage />} />
          <Route exact path="/wines/:wineID/" element={<WinePage />} />
          {/* <Route exact path="/wines/add/" element={<AddWinePage />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
