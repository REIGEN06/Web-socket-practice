import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  PageOne,
  PageTwo,
  PageZero,
  Register,
  SignIn,
} from "./components/Pages";
import { MainPage } from "./components/MainPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />}>
          <Route index element={<PageZero />} />
          <Route path="one" element={<PageOne />} />
          <Route path="two" element={<PageTwo />} />
          <Route path="register" element={<Register />} />
          <Route path="signin" element={<SignIn />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
