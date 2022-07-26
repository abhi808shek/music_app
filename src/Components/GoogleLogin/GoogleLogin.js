import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { authentication } from ".././Firebase/Firebase";
const provider = new GoogleAuthProvider();



export const signInWithGoogle = (setAuthToken) => {
  
  signInWithPopup(authentication, provider)
  .then((response) => {
    const name = response.user.displayName;
    const accessToken = response.user.accessToken;
    if (response) {
        localStorage.setItem("name", name);
        localStorage.setItem("accessToken", accessToken);
        setAuthToken(accessToken);
    }
    })
    .catch((error) => {
      console.log(error);
    });
};
