import Navbar from "./Components/Navbar/Navbar";
import Sidebar from "./Components/Sidebar/Sidebar";
import React,{useEffect,useState} from 'react'

import Footer from "./Components/Footer/Footer";
import Albumpage from "./Components/Album/Albumpage";
import Likedpage from "./Components/Likedpage/Likedpage";
import Mixedpage from "./Components/Mixedsong/Mixedpage";
import AlbumMixpage from "./Components/AlbumMix/AlbumMixpage";
import Homepage from "./Components/Homepage/Homepage";
import Loginpage from "./Components/Loginpage/Loginpage";
import { Routes, Route ,useNavigate} from "react-router-dom";

function App() {
  const [authToken, setAuthToken] = useState(null)
  const name = localStorage.getItem("name");
  useEffect(() => {
    setAuthToken(localStorage.getItem("accessToken"))
  }, [authToken])
  
  return (
    <>
      <Navbar auth={authToken} name={name} setAuthToken={setAuthToken}/>
      <div className="sidebar">
        <Sidebar />
      </div>
      <div>
        <Routes>
          <Route exact path="/" element={<Homepage auth={authToken} />} />
          <Route exact path="/loginpage" element={<Loginpage auth={authToken} setAuthToken={setAuthToken}/> } />
          <Route exact path="/album" element={<Albumpage auth={authToken}/>} />
          <Route exact path="/likedpage" element={<Likedpage auth={authToken}/>} />
          <Route exact path="/mixedpage" element={<Mixedpage auth={authToken}/>} />
          <Route exact path="/albummixpage" element={<AlbumMixpage auth={authToken}/>} />

        </Routes>
      </div>
      <Footer auth={authToken}/>
    </>
  );
}

export default App;
