import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Footer from './pages/Footer';
import Menu from './pages/Menu';
import About from './pages/About';
import NavBar from './Components/NavBar';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar></NavBar>
        {/* <Switch>
          <Route path='/' exact element={Home}/>
        </Switch> */}
          <Routes>
            <Route path='/' exact element={<Home></Home>}></Route>
            <Route path='/menu' element={<Menu></Menu>}></Route>
            <Route path='/about' element={<About></About>}></Route>
            <Route path='/contact' element={<Footer></Footer>}></Route>
          </Routes>
        <Footer></Footer>  
      </Router>
    </div>
  );
}

export default App;
