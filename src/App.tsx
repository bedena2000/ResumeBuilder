import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Template } from "./pages/Template";
import { Create } from "./pages/Create";
import { PersonalInformation } from "./components/resume/PersonalInformation";
import { Education } from "./components/resume/Education";
import { Experience } from "./components/resume/Experience";
import { Contact } from "./components/resume/Contact";
import { Award } from "./components/resume/Award";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/templates" element={<Template />} />
      <Route path="/create" element={<Create />}>
        <Route path="" element={<PersonalInformation />} />
        <Route path="education" element={<Education />} />
        <Route path="experience" element={<Experience />} />
        <Route path="contact" element={<Contact />} />
        <Route path="award" element={<Award />} />
      </Route>
    </Routes>
  );
}

export default App;
