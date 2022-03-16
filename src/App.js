
import './App.scss';
import HomePage from './pages/homepage/homepage.component';
import {Routes,Route} from 'react-router-dom'

const HatsPage =()=>(
  <div>
    <h1>hats page</h1>
  </div>
);
function App() {
  return (
    <div >
    
      <Routes>
      <Route  exact path='/' element={<HomePage/>}></Route>
      <Route path='/hats' element={<HatsPage/>}></Route>
      </Routes>
      
    {/* <HomePage></HomePage> */}
    </div>
  );
}

export default App;
