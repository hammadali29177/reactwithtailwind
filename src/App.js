
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./Components/Common/Header";
import { HeroSection } from "./Components/Common/HeroSection";



function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Header />} />
          <Route path="herosection" element={<HeroSection />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
