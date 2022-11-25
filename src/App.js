import './component/static/css/bootstrap.min.css';
import Navabr from './component/forms/pages/Navabr';
import Carasuel from './component/forms/pages/Carasuel';
import Home from './component/forms/pages/Home';
import Admin from './component/forms/pages/Admin';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
function App() {
 
  return (
    <>
    
  <Navabr/>
       {/* <Carasuel/>
       <Home/> */}
<Router>
       <Routes>
              <Route exact path="/home" element={<Home />}></Route>
              <Route exact path="/" element={<Carasuel />}></Route>
              <Route exact path='/admin' element={< Admin />}></Route>
            </Routes>
            </Router>
    </> 
  );
}

export default App;
