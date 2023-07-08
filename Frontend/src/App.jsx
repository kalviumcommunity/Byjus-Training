import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import backgroundImage from "./assets/Background-img.png";
import { Box } from "@chakra-ui/react";
import "./App.css";
import InputLanguage from "./components/InputLanguage";
import OutputLanguage from "./components/OutputLanguage";
import Translation from "./components/Translation";


function App() {
  return (
    <>
      <Box
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: -1,
        }}
      >
        <Box
          position="absolute"
          top={0}
          left={0}
          width="100%"
          height="100%"
          backgroundColor="black"
          opacity={0.7}
        />
        <Box
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: -1,
          }}
        />
      </Box>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/inputLanguage" element={<InputLanguage/>} />
          <Route path="/outputLanguage" element={<OutputLanguage/>} />
          <Route path="/translation" element={<Translation/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
