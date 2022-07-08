import Navbar from "./Components/Navbar/Navbar";
import Sidebar from "./Components/Sidebar/Sidebar";
import Footer from "./Components/Footer/Footer";
import Albumpage from "./Components/Album/Albumpage";
import Likedpage from "./Components/Likedpage/Likedpage";
import Content from "./Components/Content/Content";
import Content2 from "./Components/Content2/Content2";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="Likedpage">
        <Routes>
          <Route exact path="/album" element={<Albumpage />} />
          <Route exact path="/likedpage" element={<Likedpage />} />
        </Routes>
      </div>

      <Footer />
    </>
  );
}

export default App;
