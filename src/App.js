import "./App.css";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import { useState } from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import { Route, Routes } from "react-router-dom";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [mode, setMode] = useState("light"); // setDark to true if you want to use the dark theme
  const [alert, setAlert] = useState(null); // setDark to true if you want to use show alert

  const toggleMode = () => {
    if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "#FFFFFF";
      document.body.style.color = "#000000";
      showAlert("LightMode is enabled successfully", "success");
    } else {
      setMode("dark");
      document.body.style.backgroundColor = "#022c43";
      document.body.style.color = "#FFFFFF";
      showAlert("DarkMode is enabled successfully", "success");
    }
  };

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  };

  return (
    <>
      <Navbar mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <Routes>
        <Route
          path="/"
          element={
            <TextForm
              showAlert={showAlert}
              heading="Enter the text below to perform different actions"
              mode={mode}
            />
          }
        />
        <Route path="/about" element={<About mode={mode}/>} />
        <Route path="/contact" element={<Contact showAlert={showAlert}/>} />
      </Routes>
      <Footer/>
    </>

  );
}

export default App;
