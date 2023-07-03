import './App.css'
import { BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Home from './components/Home';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/signUp" element={<SignUp/>}></Route>
          <Route path="/signIn" element={<SignIn/>}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App
