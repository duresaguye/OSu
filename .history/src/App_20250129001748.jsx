import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Departments from './pages/Departments';
import Faculty from './pages/Faculty';
import Events from './pages/Events';
import DepartmentPage from './components/DepartmentPage'; 
import DepartmentDetails from './components/DepartmentDetails';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/departments" element={<Departments />} />
            <Route path="/faculty" element={<Faculty />} />
            <Route path="/events" element={<Events />} />
      
            <Route path="/department/:departmentId" component={<DepartmentDetails />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
