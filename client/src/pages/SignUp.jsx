import React from "react";
import { useAuthStore } from "../store/useAuthStore";

const SignUp = () => {
  const { authUser } = useAuthStore();

  return <div> SignUp</div>;
};

export default SignUp;
