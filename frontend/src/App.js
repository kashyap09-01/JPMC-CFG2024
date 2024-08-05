import './styles/App.css';
import Home from './components/Home';
import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {  Routes, Route } from 'react-router-dom';
import { UserContext } from './UserContext';
import { useLocation } from 'react-router-dom';
import Authenticate from './components/Authenticate';
import Form from './components/Form';
import Page1 from './components/Page1';
import Page2 from './components/Page2';
import Page3 from './components/Page3';
import MainEditFormPage from './components/MainEditFormPage';
import Authenticate1 from './components/Authenticate1'; 
import Admin from './components/Admin';
import GridExample from './components/GridExample';
import NewMessage from './components/NewMessage';
import RespondToQuery from './components/RespondToQuery';
import DataCharts from './components/DataCharts';
import NewVolunteer from './components/NewVolunteer';
import { useNavigate } from 'react-router-dom';
import NewFarmer from './components/NewFarmer';
function App() {
  const location = useLocation(); // Use useLocation hook from react-router-dom

  useEffect(() => {
    const originalTitle = document.title;
  
    const handleBlur = () => {
      document.title = "Come back 😢";
    };
  
    const handleFocus = () => {
      document.title = originalTitle;
    };
  
    // Ensure correct event listener registration
    window.addEventListener('blur', handleBlur);
    window.addEventListener('focus', handleFocus);
  
    // Cleanup event listeners on component unmount
    return () => {
      window.removeEventListener('blur', handleBlur);
      window.removeEventListener('focus', handleFocus);
    };
  }, []); // Empty dependency array ensures useEffect runs once on mount


  return (
    <>
    <>
      <ToastContainer />
      <ScrollToTop />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/farmer' element={<Authenticate />} />
      <Route path='/form' element={<Form />} />
      <Route path='/volunteer' element={<Authenticate1 />} />
      <Route path='/page1' element={<Page1></Page1>}/>
      <Route path='/page2' element={<Page2></Page2>}/>
      <Route path='/page3' element={<Page3></Page3>}/>
      <Route path='/MainEditFormPage' element={<MainEditFormPage></MainEditFormPage>}/>
      <Route path='/admin' element={<Admin />} />
      <Route exact path="/grid-example" element={<GridExample />} />
      <Route exact path="/new-message" element = {<NewMessage/>}/>
      <Route exact path= "/respond-to-query" element = {<RespondToQuery />}/>
      <Route exact path="/data-charts" element = {<DataCharts/>} />
      <Route exact path = "/new-farmer" element = {<NewFarmer/>}/>
      <Route exact path = "/new-volunteer" element = {<NewVolunteer />}/>
      </Routes>
      
    </>
    
    </>
  );
}

export default App;