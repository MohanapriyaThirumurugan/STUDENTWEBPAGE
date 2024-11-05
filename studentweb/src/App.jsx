import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Studentcreate from './component/Studentcreate'
import Studuentpannel from './component/studuentpannel'
import Updatestudent from './component/Updatestudent'


const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
              <Route path='/studentpanel' element={<Studuentpannel/>}></Route>
               < Route path='/' element={<Studentcreate/>}></Route>
               < Route path='/update' element={<Updatestudent/>}></Route>

               
      </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App