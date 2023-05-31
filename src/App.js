import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PageOne, PageTwo, PageZero } from "./components/Pages";
import { MainPage } from "./MainPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />}>
          <Route index element={<PageZero />} />
          <Route path="one" element={<PageOne />} />
          <Route path="two" element={<PageTwo />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
