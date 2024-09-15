import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Common/Navbar';
import HeaderBox from './Components/Common/HeaderBox';
import ExplorationSection from './Components/Common/ExplorationSection';
import Dasboard from './Pages/Dasboard';
import { Routes, Route } from 'react-router-dom';
import Userform from './Pages/Userform';
import PreviewPage from './Pages/PreviewPage';


function App() {
  return (
    <div className="App">
    <Routes>
          <Route path="/" element={<Dasboard />} />
          <Route  path="/user-form" element={<Userform/>} />
          <Route path="/PreviewPage" element={<PreviewPage/>} /> 
        </Routes>
    </div>
  );
}

export default App;
