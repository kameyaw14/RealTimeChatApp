import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import { useAuthStore } from "./store/useAuthStore";
<<<<<<< HEAD
import { Loader } from "lucide-react";
import Login from "./pages/Login";

const App = () => {
  const { authUser, checkAuth, isCheckingAuth } = useAuthStore();
=======

const App = () => {
  const { authUser, checkAuth } = useAuthStore();
>>>>>>> 70c4d38093ad8fc48a962d497bb1405e532e9fef

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  console.log({ authUser });

<<<<<<< HEAD
  if (isCheckingAuth && !authUser) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Loader className="size-10 animate-spin" />
      </div>
    );
  }

=======
>>>>>>> 70c4d38093ad8fc48a962d497bb1405e532e9fef
  return (
    <div className="">
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={authUser ? <Home /> : <Navigate to={"/login"} />}
        />
        <Route
          path="/signup"
          element={!authUser ? <SignUp /> : <Navigate to={"/"} />}
        />
        <Route
          path="/login"
          element={!authUser ? <Login /> : <Navigate to={"/"} />}
        />
      </Routes>
    </div>
  );
};

export default App;
