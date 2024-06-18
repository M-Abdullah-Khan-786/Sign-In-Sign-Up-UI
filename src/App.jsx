import "./App.css";
import SignIn from "./components/SignIn";
import { Routes, Route } from "react-router-dom";
import SignUp from "./components/SignUp";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/register" element={<SignUp />} />
    </Routes>
  );
};

export default App;
