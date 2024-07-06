import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Template } from "./pages/Template";
import { Create } from "./pages/Create";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/templates" element={<Template />} />
      <Route path="/create" element={<Create />} />
    </Routes>
  );
}

export default App;
