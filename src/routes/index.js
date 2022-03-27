import Characters from "../components/Characters";
import Episodes from "../components/Episodes";
import NavBarComponent from '../components/NavBar';

 import {BrowserRouter, Route, Routes} from "react-router-dom"

 export const RoutesPath = () => {
     return ( 
        <BrowserRouter>
              <NavBarComponent/>
            <Routes>
                <Route path="/" element={<Characters/>}/>
                <Route path="/episodes" element={<Episodes/>}/>
            </Routes>
        </BrowserRouter>
      );
 }
  
 export default RoutesPath;