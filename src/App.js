import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  Switch,
} from "react-router-dom";
import "./App.css";
import "./components/MainPage.css";
import PersonalMain from "./components/PersonalMainPage";
import Main from "./components/MainPage";
import Login from "./components/LoginPage";
import CompletePage from "./components/CompletePage";
import Gallery from "./components/Gallery";
import GalleryImg from "./components/GalleryImage";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/personal" element={<PersonalMain />} />
        <Route exact path="/complete" element={<CompletePage />} />
        <Route exact path="/gallery" element={<Gallery />} />
        <Route exact path="/gallery/:imgId" element={<GalleryImg />} />
      </Routes>
    </Router>
  );
}

export default App;
