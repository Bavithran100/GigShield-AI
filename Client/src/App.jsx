
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Landing from './Landing'
import Dashboard from './Dashboard'


function App() {
 

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Landing></Landing>}></Route>
      <Route path='/Dashboard' element={<Dashboard></Dashboard>}></Route>

    </Routes>
    </BrowserRouter>
  )
}

export default App
