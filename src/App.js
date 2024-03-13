import Nav from "./components/Nav.jsx"
import Home from "./screens/Home.jsx";
import B17s from "./screens/B17s.jsx";
import B17Detail from "./screens/B17Detail.jsx";
import B17Create from "./screens/B17Create.jsx";
import B17Edit from "./screens/B17Edit.jsx";
import { Routes, Route } from "react-router-dom";
import './App.css';



function App() {
  return (
  <div className="App">
    <Nav />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/b17s" element={<B17s />} />
      {/*<Route path="/b17s/groups/:groupId" element={<B17Group /> */}
      <Route path="/b17s/:id" element={<B17Detail />} />
      <Route path="/add-b17" element={<B17Create />} />
      <Route path="/b17s/:id/edit" element={<B17Edit />} />
    </Routes>
  </div>
  );
}

export default App;
