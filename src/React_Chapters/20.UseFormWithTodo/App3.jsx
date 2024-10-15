
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MyComponent from './MyComponent';
import SubComponent from './SubComponent';


const App = () => {
  return (
   <BrowserRouter>
   <Routes>
   <Route path='/' element={<MyComponent/>}/>
   <Route path='subcomponent' element={<SubComponent/>}/>

   </Routes>
   </BrowserRouter>
  )
}

export default App