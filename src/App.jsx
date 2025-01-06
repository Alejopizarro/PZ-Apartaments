import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="*" element={<Navigate to="/" />} />
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
