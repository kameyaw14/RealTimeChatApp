import React, { useState } from "react";
import { useAuthStore } from "../store/useAuthStore";
import { Eye, EyeOff, Loader2, Lock, Mail, MessageSquare } from "lucide-react";
import toast from "react-hot-toast";
import AuthImagePattern from "../components/AuthImagePattern";
import { Link } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { login, isLoggingIn } = useAuthStore();

  const validateForm = () => {
    if (formData.email.trim() === "") {
      toast.error("Email is required");
      return false;
    }
    if (formData.password.trim() === "") {
      toast.error("Password is required");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const success = validateForm();
    if (success === true) {
      await login(formData);
    }
  };

  return (
    <div className="h-screen grid lg:grid-cols-2">
      {/* LEFT */}
      <div className="flex flex-col justify-center items-center p-6 sm:p-12">
        <div className="w-full max-w-md space-y-2 text-center">
          {/* LOGO */}
          <div className="flex justify-center gap-2 items-center">
            <div className="bg-base-200 p-2 rounded-lg">
              <MessageSquare className="size-8" />
            </div>
          </div>
          <h1 className="text-2xl font-bold">Welcome Back</h1>
          <p className="text-sm text-gray-500">
            Login to your account to continue
          </p>
        </div>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="w-full max-w-md space-y-8">
          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium">Email</span>
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Mail className="size-5 text-gray-500" />
              </div>
              <input
                type="email"
                placeholder="youremail@gmail.com"
                className="input input-bordered w-full pl-10"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium">Password</span>
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Lock className="size-5 text-gray-500" />
              </div>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="********"
                className="input input-bordered w-full pl-10"
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
              />
              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute inset-y-0 right-0 flex items-center pr-3"
              >
                {showPassword ? (
                  <EyeOff className="size-5 text-base-content/40" />
                ) : (
                  <Eye className="size-5 text-base-content/40" />
                )}
              </button>
            </div>
          </div>
          <button
            type="submit"
            disabled={isLoggingIn}
            className="btn btn-active w-full"
          >
            {isLoggingIn ? (
              <>
                <Loader2 className="size-5 animate-spin" /> Loading...
              </>
            ) : (
              "Login"
            )}
          </button>

          <div className="text-center">
            <p className="text-base-content/60">
              Don't have an account?{" "}
              <Link to={"/signup"} className="link link-primary">
                Sign up
              </Link>
            </p>
          </div>
        </form>
      </div>

      {/* RIGHT */}
      <AuthImagePattern
        title={"Join our community"}
        subTitle={"Connect with friends, share moments, and more"}
      />
    </div>
  );
};

export default Login;
