import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Products from "./pages/Products";
function App() {
  return (
    <>
      <div className="app min-h-screen bg-gray-50 text-gray-700">
        <Navbar />
        <Routes>
          <Route path="/" element={<Products />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
