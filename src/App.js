import 'bulma/css/bulma.min.css'
import './App.css';
import NavBarComponent from './components/NavBar';
import {Provider} from 'react-redux';
import store from "./config/Store"
import EpisodesComponent from './components/Episodes';


function App() {
  return (
    <Provider store={store}>
      <div className='block'>
        <NavBarComponent/>
        <EpisodesComponent/>
      </div>
      
    </Provider>
  );
} 

export default App;
