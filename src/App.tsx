import "./App.css";
import Navbar from "./components/Navbar";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import News from "./components/News";
import Blog from "./components/Blog";
import Events from "./components/Events";

const App: React.FC = () => {
  return (
    <>
      <Router>
      <Navbar />
        <Routes>
          <Route path="/News" element={<News />}></Route>
          <Route path="/Events" element={<Events />}></Route>
          <Route path="/" element={<Blog />}></Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
