import './App.scss';
import {Route, Routes} from 'react-router-dom'
import Header from './Header/Header';
import Wiriting from './Writing/Writing';
import Home from './Home/Home';
import About from './About/About';
import Work from './Work/Work';
import Contact from './Contact/Contact';
import LayoutComponent from './Layout/layout';
import PageNotFound from './PageNotFound/PageNotFound';




function App() {
  return (
    <div className="App">

      <div className="header">
         <Header/>
   
      </div>

      

     <div className='routes'>
     <Routes>
      
         <Route  element={<LayoutComponent/>}>
         <Route path="/home"  element={<Home/>} />
         <Route path="/"  element={<Home/>} />
         <Route path="about" element={<About/>} />
         <Route path="work" element={<Work/>}/>
         <Route path="writing" element={<Wiriting/>}/>
         <Route path="contact" element={<Contact/>}/>
         <Route path="*"  element={<PageNotFound/>}/>
         </Route>
      </Routes>
     </div>

      
    </div>
  );
}

export default App;
