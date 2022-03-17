
import './App.scss';
import HomePage from './pages/homepage/homepage.component';
import { Routes,Route,useNavigate} from 'react-router-dom'




function App() {
  
  const navigate = useNavigate();

  const newPage=()=>{
 
    setTimeout(()=>{
        navigate('/');
    })
  
    
  }

  const HatsPage =(props)=>(
  
    console.log(props),
    <div>
      <button onClick={newPage} >Hello</button>
      <h1>hats page:</h1>
    </div>
  )
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
