import Navbar from "./Components/Navbar/Navbar";
import Sidebar from "./Components/Sidebar/Sidebar";
import React,{useEffect,useState} from 'react'

import Footer from "./Components/Footer/Footer";
import Albumpage from "./Components/Album/Albumpage";
import Likedpage from "./Components/Likedpage/Likedpage";
import AlbumMixpage from "./Components/AlbumMix/AlbumMixpage";
import Homepage from "./Components/Homepage/Homepage";
import Loginpage from "./Components/Loginpage/Loginpage";
import { Routes, Route ,useNavigate} from "react-router-dom";
import Mixedpage1 from "./Components/Mixedsong/MixedPage1/Mixedpage1";
import Mixedpage2 from "./Components/Mixedsong/MixedPage2/Mixedpage2";
import Mixedpage3 from "./Components/Mixedsong/MixedPage3/MixedPage3";
import Mixedpage4 from "./Components/Mixedsong/MixedPage4/MixedPage4";
import Mixedpage5 from "./Components/Mixedsong/MixedPage5/MixedPage5";
import Mixedpage6 from "./Components/Mixedsong//MixedPage6/MixedPage6";
import Mixedpage7 from "./Components/Mixedsong/MixedPage7/MixedPage7";
import Mixedpage8 from "./Components/Mixedsong/MixedPage8/MixedPage8";


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
          <Route exact path="/albummixpage" element={<AlbumMixpage auth={authToken}/>} />
          <Route exact path="/mixedpage1" element={<Mixedpage1 auth={authToken}/>} />
          <Route exact path="/mixedpage2" element={<Mixedpage2 auth={authToken}/>} />
          <Route exact path="/mixedpage3" element={<Mixedpage3 auth={authToken}/>} />
          <Route exact path="/mixedpage4" element={<Mixedpage4 auth={authToken}/>} />
          <Route exact path="/mixedpage5" element={<Mixedpage5 auth={authToken}/>} />
          <Route exact path="/mixedpage6" element={<Mixedpage6 auth={authToken}/>} />
          <Route exact path="/mixedpage7" element={<Mixedpage7 auth={authToken}/>} />
          <Route exact path="/mixedpage8" element={<Mixedpage8 auth={authToken}/>} />


        </Routes>
      </div>
      <Footer auth={authToken}/>
    </>
  );
}

export default App;
