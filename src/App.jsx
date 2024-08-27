// import SignIn from "./components/sign-in/SignIn";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./components/Admin/SignUp";
import Dashboard from "./components/Admin/AdminDashboard";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
