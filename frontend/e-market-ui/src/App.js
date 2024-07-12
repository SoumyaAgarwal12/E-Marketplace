import './App.css';
import MainHeader from './components/mainHeader';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import About from './components/About';
import SignUp from './components/SignUp';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
        {/* For Links  */}
        <BrowserRouter>
          <MainHeader />
          {/* For Routes  */}
          <Routes>
            <Route path='/' element={<h1>Home page Component</h1>} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<h1>Contact page Component</h1>} />
            <Route path='/products' element={<h1>Products page Component</h1>} />
            <Route path='/signup' element={<SignUp />} />
          </Routes>
          {/* <h1>Hello</h1> */}
        </BrowserRouter>

        <Footer />     {/* No routing in footer file that's why we don't need to call in "BrowserRouter" tag.  */}
    </div>
  );
}

export default App;
