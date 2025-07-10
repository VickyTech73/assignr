import './App.css';
import Home from './components/Home';
import Assignments from './components/Assignments';
import AssignmentView from './components/AssignmentView';
import Navbar from './components/Navbar';
import SideBar from './components/SideBar';
import { Routes, Route } from "react-router-dom"
import About from './components/About';
import Contact from './components/Contact';
import UnderContruction from './components/UnderContruction';
import Resources from './components/Resources';
import NotFound from './components/NotFound';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <SideBar />
        <div className="content">
          <Routes>
              <Route path='/assignr' element={<Home />} />
              <Route path='/assignments' element={<Assignments />} />
              <Route path="/assignments/:id" element={<AssignmentView />} />
              <Route path='/about' element={<About />} />
              <Route path='/contact' element={<Contact />} />
              <Route path='/profile' element={<UnderContruction />} />
              <Route path='/notifications' element={<UnderContruction />} />
              <Route path='/resources' element={<Resources />} />
              <Route path='/upload' element={<UnderContruction />} />
              <Route path='*' element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
