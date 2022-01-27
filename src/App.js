import './App.css';
import Homepage from './components/Homepage';
import Registration from './components/Registration';
import Login from './components/Login';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route path="/" exact element={<Registration/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/homepage" element={<Homepage/>}/>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
