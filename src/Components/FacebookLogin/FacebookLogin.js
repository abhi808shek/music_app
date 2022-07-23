import { FacebookAuthProvider, signInWithPopup } from "firebase/auth";
import { authentication } from ".././Firebase/Firebase";

const provider = new FacebookAuthProvider();

export const signInWithFacebook = () => {
  signInWithPopup(authentication, provider)
    .then((response) => {
        console.log(response);
        // const name = response.user.displayName;
        // const accessToken = response.user.accessToken;
        // if(response){
        //     localStorage.setItem('name',name);
        //     localStorage.setItem('accessToken',accessToken);
        //     console.log(response.user.displayName);
        //     console.log(response.user.accessToken);
        //     console.log(response.user);

        //     // console.log(response.UserCredentialImpl.user);
        // }
    })
    .catch((error) => {
        console.log(error);
    });
};
