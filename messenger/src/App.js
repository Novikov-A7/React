import './App.css';
import { Router } from './components/Router/index.js';
import { store } from './store/index.js';
import { Provider } from 'react-redux';


const App = () => (
   <Provider store={store}>
    <Router/>
  </Provider> 
)


export default App;

