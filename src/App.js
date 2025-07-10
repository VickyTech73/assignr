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

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <SideBar />
        <div className="content">
          <Routes>
              <Route path='/assignr' element={<Home />} />
              <Route path='/assignr/assignments' element={<Assignments />} />
              <Route path="/assignr/assignments/:id" element={<AssignmentView />} />
              <Route path='/assignr/about' element={<About />} />
              <Route path='/assignr/contact' element={<Contact />} />
              <Route path='/assignr/profile' element={<UnderContruction />} />
              <Route path='/assignr/notifications' element={<UnderContruction />} />
              <Route path='/assignr/resources' element={<Resources />} />
              <Route path='/assignr/upload' element={<UnderContruction />} />
              <Route path='*' element={<h1>404 page not found</h1>} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
