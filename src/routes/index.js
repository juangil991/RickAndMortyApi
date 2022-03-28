import Characters from "../components/Characters";
import Episodes from "../components/Episodes";
import Favorites from "../components/Favorites";
import NavBarComponent from '../components/NavBar';

 import {BrowserRouter, Route, Routes} from "react-router-dom"


 export const RoutesPath = () => {
     return ( 
        <BrowserRouter>
              <NavBarComponent/>
            <Routes>
                <Route path="/" element={<Characters/>}/>
                <Route path="/episodes" element={<Episodes/>}/>
                <Route path="/favorite" element={<Favorites/>}/>
            </Routes>
        </BrowserRouter>
      );
 }
  
 export default RoutesPath;