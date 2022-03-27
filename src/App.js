import 'bulma/css/bulma.min.css'
import './App.css';
import NavBarComponent from './components/NavBar';
import {Provider} from 'react-redux';
import store from "./config/Store"
import EpisodesComponent from './components/Episodes';
import CharactersComponent from './components/Characters'
import RoutesPath from './routes';


function App() {
  return (
    <Provider store={store}>
      <div className='block'>
        <RoutesPath/>
      </div>
      
    </Provider>
  );
} 

export default App;
