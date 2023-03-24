import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './Components/Header/Header';
import Home from './Pages/Home/Home';
import Movielist from './Components/Movielist/Movielist';
import Movie from './Pages/Moviedetail/Movie';

function App() {
  return (
    <div className="App">
     <Router>
     <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route index element={<Home/>}/>
        <Route path="/movie/:id" element={<Movie />}/>
        <Route path="/movies/:type" element={<Movielist/>}/>
        <Route path="/*" element="Invalid Url"/>
      </Routes>
      <Movielist/>
     </Router>
    </div>
  );
}

export default App;
