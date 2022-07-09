import Navbar from "./Components/Navbar/Navbar";
import Sidebar from "./Components/Sidebar/Sidebar";
import Footer from "./Components/Footer/Footer";
import Albumpage from "./Components/Album/Albumpage";
import Likedpage from "./Components/Likedpage/Likedpage";
import Homepage from "./Components/Homepage/Homepage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <div className="sidebar">
        <Sidebar />
      </div>
      <div>
        <Routes>
          {/* <Route exact path="/" element={<Homepage />} /> */}
          <Route exact path="/album" element={<Albumpage />} />
          <Route exact path="/likedpage" element={<Likedpage />} />
        </Routes>
      </div>
      <Homepage />
      <Footer />
    </>
  );
}

export default App;
