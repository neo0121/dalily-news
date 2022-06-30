import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
  <>
  <BrowserRouter>
<Navbar />
<Routes>
      <Route path="/" element={<Home category="everything" />} />
      <Route path="/Sports" element={<Home category="Sports" />} />
      <Route path="/Business" element={<Home category="Business" />} />
      <Route path="/Science" element={<Home category="Science" />} />
      <Route path="/Politics" element={<Home category="Politics" />} />
      <Route path="/GeoPolitics" element={<Home category="GeoPolitics" />} />
      
</Routes>
</BrowserRouter>
  </>
  );
}

export default App;
