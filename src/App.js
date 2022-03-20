
import './App.scss';
import HomePage from './pages/homepage/homepage.component';
import { Routes,Route,useNavigate} from 'react-router-dom'
import Shop from './pages/shop/shop.component';



function App() {
  
  const navigate = useNavigate();

  const newPage=()=>{
 
    setTimeout(()=>{
        navigate('/');
    })
  
    
  }

  // const HatsPage =(props)=>(
  
  //   console.log(props),
  //   <div>
  //     <button onClick={newPage} >Hello</button>
  //     <h1>hats page:</h1>
  //   </div>
  // )
  return (
    <div >
    
      <Routes>
      <Route  exact path='/' element={<HomePage/>}></Route>
      <Route path='/shop' element={<Shop/>}></Route>
      </Routes>
      
      
    {/* <HomePage></HomePage> */}
    </div>
  );
}

export default App;
