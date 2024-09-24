// import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
// import { useEffect, useState } from "react"
// import app, { googleAuthProvider } from '../../firebase'

// export const AuthProvider = () => {
//     const auth = getAuth(app)
//     const [user, setUser] = useState(auth.currentUser);

//     useEffect(() => {
//        const unsubscribe = auth.onAuthStateChanged((isAuth) => {
//             if(isAuth === null){
//                return setUser(isAuth)
//             } 
//             signInWithPopup(auth, googleAuthProvider).then(credentials => setUser(credentials.user)).catch((e) => console.log(e) )
//         } )
//         return unsubscribe;
//     },[auth])
//     return user !== null ? <>{user.displayName}</> : <>loading</>;
// }