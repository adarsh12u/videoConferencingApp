import './App.css';
import {BrowserRouter,Route , Routes } from 'react-router-dom'
import Main from './main';
import Room from './room/room';
function App() {
  return (
            
   <BrowserRouter>
          
          <Routes>
  
                  <Route path='/' element = {<Main/>} >  </Route>
                  <Route path='/room/:roomid' element={<Room/>} />
          </Routes>
       
   </BrowserRouter>

  );
}

export default App;
