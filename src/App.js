
import './App.scss';
import Header from './components/Header';
// import { BrowserRouter as Router, Outlet, Route,Routes } from "react-router-dom";
import  Home from './pages/Home';
import { Fragment } from 'react';
import Resume from './pages/Resume';
import Contact from './pages/Contact';

function App() {
  return (
    <Fragment>
      {/* <Router>
        <Header/>
        <Routes>
          <Route exact path="/" element = {<Home/>} />
          <Route path='/resume' element ={<Resume/>}/>
          </Routes>
      </Router> */}
      <header>
      <Header/>
      </header>
      <Home/>
      <Resume/>
      <Contact/>  
       </Fragment>
    );
  }
  
  // function NotFound() {
  //   return <p>Ha llegado a una página que no existe</p>;
  // }

export default App;
