import React, { lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "./styles/App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LoadingPage from "./pages/LoadingPage";

const Home = lazy(() => import("./pages/Home"));
const Projects = lazy(() => import("./pages/Projects"));
const Contact = lazy(() => import("./pages/Contact"));
const About = lazy(() => import("./pages/About"));
const Error = lazy(() => import("./pages/Error"));
const DisplayProject = lazy(() => import("./pages/DisplayProject"));
const Confirmation = lazy(() => import("./pages/Confirmation"));

function App() {
  return (
    <div className="App">
      <Navbar />
      <Suspense fallback={<LoadingPage />}>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:slug" element={<DisplayProject />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/contact/confirmation" element={<Confirmation />} />
          <Route path="/error" element={<Error />} />
          <Route path="*" element={<Navigate to="/error" replace />} />
          <Route path="/loading" element={<LoadingPage />} />
        </Routes>
      </Suspense>
      <Footer />
    </div>
  );
}

export default App;
