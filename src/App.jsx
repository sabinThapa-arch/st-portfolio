import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/home";
import CV from "./pages/cv";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cv" element={<CV />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
