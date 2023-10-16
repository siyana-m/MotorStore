import React from "react";
//import Login from "./components/Login";
//import Header from "./components/Header";
//import ProductGrid from "./components/ProductGrid";
//import NavBar from "./components/NavBar";
//import UserAvatar from "./components/UserAvatar";
//import Sidebar from "./components/SideBar";
//import AccordionMenu from "./components/AccordionMenu";
//import ModalWindow from "./components/ModalWindow";
import {
  BrowserRouter as Router, Route, Routes
} from "react-router-dom";
import AppHeader from "./components/AppHeader";


/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/

/*
function App() {
  return (
    <div>
      <Login></Login>
    </div>
  )
}
*/

/*
function App() {
  return (
    <div>
      <Header></Header>
    </div>
  );
}
*/

/*
function App() {
  return (
    <div>
      <ProductGrid></ProductGrid>
    </div>
  );
}

*/

/*
function App() {
  return (
    <div>
      <NavBar></NavBar>
    </div>
  )
}
*/

/*
function App() {
  return(
      <>
        <Router>
          <Routes>
            <Route path='/' element={<NavBar />}></Route>
          </Routes>
        </Router>
      
      </>

  )
}
*/

/*
function App() {
  return(
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<UserAvatar />}></Route>
        </Routes>
      </Router>
    </div>
  )
}
*/


/*
function App() {
  return(
  <div>
    <Router>
      <Routes>
        <Route path='/' element={<Sidebar />}>
        </Route>
      </Routes>
    </Router>
  </div>
  )
}
*/

/*
function App() {
  return(
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<AccordionMenu />}></Route>
        </Routes>
      </Router>
    </div>
  )
}
*/

/*
function App(){
  return(
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<ModalWindow/>}></Route>
        </Routes>
      </Router>
    </div>
  )
}
*/


function App() {
  return(
    <>
    <Router>
      <AppHeader/>
      <Routes>
      </Routes>
    </Router>
    </>
  )
}


export default App;