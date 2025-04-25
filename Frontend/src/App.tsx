
import { RecoilRoot } from 'recoil'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Home } from './Pages/Home'

function App(){
    
  return (
    <RecoilRoot>
    <BrowserRouter>
      <Routes>
        <Route>
            <Route path="" element={<Home/>} />
        </Route>
       </Routes>
    </BrowserRouter>
    </RecoilRoot>
  )
}

export default App
