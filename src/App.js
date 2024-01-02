import { Provider } from 'react-redux';
import './App.css';
import Body from './components/Body';
import appStore from './utils/appStore';

function App() {
  return (
    <div className="App transition-all duration-300 ease-in-out">
      <Provider store={appStore}>
       
      <Body className=""/>
      </Provider>
      
    </div>
  );
}

export default App;
