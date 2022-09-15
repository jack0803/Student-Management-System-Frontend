import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ViewStudent from './components/ViewStudent';
import AddStudent from './components/AddStudent';
import Welcome from './components/Welcome';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>

      <Router>
        <Navbar />

        <Routes>
          <Route exact path='/' element={<Welcome />} />

          <Route exact path='/addStudent' element={<AddStudent />} />

          <Route exact path='/viewStudent' element={<ViewStudent />} />
        </Routes>

        <Footer />
      </Router>
    </>
  );
}

export default App;
