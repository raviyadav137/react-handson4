import './App.css'
import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./components/Home";
import Student from "./components/Student";
import Contact from "./components/Contact";
import Nav from "./components/Nav";
import Add from './components/Add';
import Edit from './components/Edit';
function App() {
  
    return (
        <>
            <BrowserRouter>
             <Nav/>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/student" element={<Student />} />
                    <Route exact path="/contact" element={<Contact />} />
                    <Route path="/create" element={<Add/>}/>
                    <Route path="/edit" element={<Edit/>}/>
                </Routes>
            </BrowserRouter>
        </>
    );
}
  
export default App;
