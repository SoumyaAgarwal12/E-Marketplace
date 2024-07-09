import './App.css';
import MainHeader from './mainHeader';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <MainHeader />
          <h1>Hello</h1>
        </BrowserRouter>
    </div>
  );
}

export default App;
