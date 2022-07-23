import Navbar from "./Components/Navbar/Navbar";
import Sidebar from "./Components/Sidebar/Sidebar";
import Footer from "./Components/Footer/Footer";
import Albumpage from "./Components/Album/Albumpage";
import Likedpage from "./Components/Likedpage/Likedpage";
import Homepage from "./Components/Homepage/Homepage";
import Loginpage from "./Components/Loginpage/Loginpage";
import { Routes, Route } from "react-router-dom";

function App() {
  const auth = localStorage.getItem("accessToken");
  const name = localStorage.getItem("name");

  return (
    <>
      <Navbar auth={auth} name={name}/>
      <div className="sidebar">
        <Sidebar />
      </div>
      <div>
        <Routes>
          <Route exact path="/" element={<Homepage auth={auth} />} />
          <Route exact path="/loginpage" element={<Loginpage auth={auth}/>} />
          <Route exact path="/album" element={<Albumpage auth={auth}/>} />
          <Route exact path="/likedpage" element={<Likedpage auth={auth}/>} />
        </Routes>
      </div>
      {/* <Homepage /> */}
      <Footer auth={auth}/>
    </>
  );
}

export default App;
