import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./Layout/Homepage";
import Home from "./Pages/Home";
import HomePage from "./Pages/HomePage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />}>
          <Route index element={<HomePage />} />
          <Route path="/contact" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
