import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Sidebar from "./Sidebar";
import Chat from "./Chat";
import { selectUser } from "./features/userSlice";
import Login from "./Login";
import { auth } from "./firebase";
import { login, logout } from "./features/userSlice";

function App() {
  //the dispatch shoots data into the data layer
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  // useEffect is a hook that runs once , when the application starts
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      //listener
      console.log("user is", authUser);
      if (authUser) {
        //when user is logged in
        dispatch(
          login({
            uid: authUser.uid,
            photo: authUser.photoURL,
            email: authUser.email,
            displayName: authUser.displayName,
          })
        );
      } else {
        //when user is logged out
        dispatch(logout());
      }
    });
  }, [dispatch]);

  return (
    <div className="app">
      {/* if there is a user show app, else, take user to login */}
      {user ? (
        <>
          <Sidebar />
          <Chat />
        </>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
