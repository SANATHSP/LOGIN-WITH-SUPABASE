import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SuccessPage from "./pages/SuccessPage";
import Login from "../src/pages/loginpage";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/success" element={<SuccessPage />} />
      </Routes>
    </Router>
  );
}

export default App;
