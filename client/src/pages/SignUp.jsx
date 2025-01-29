import React, { useState } from "react";
import { useAuthStore } from "../store/useAuthStore";
import { Eye, EyeOff, Loader2, Mail, MessageSquare, User } from "lucide-react";
import { Link } from "react-router-dom";
import AuthImagePattern from "../components/AuthImagePattern";
import { toast } from "react-hot-toast";

const SignUp = () => {
  const { signup, isSigningUp } = useAuthStore();

  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const ValidateForm = () => {
    if (!formData.fullName.trim()) {
      toast.error("Full name is required", {
        duration: 1000,
      });
      return false;
    }
    if (!formData.email.trim()) {
      toast.error("Email is required", {
        duration: 1000,
      });
      return false;
    }
    if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      toast.error("Invalid email", {
        duration: 1000,
      });
      return false;
    }
    if (!formData.password.trim()) {
      toast.error("Password is required", {
        duration: 1000,
      });
      return false;
    }
    if (formData.password.length < 6) {
      toast.error("Password must be at least 6 characters long", {
        duration: 1000,
      });
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const success = ValidateForm();

    if (success === true) {
      console.log(formData); // Check if fullname, email, and password are being sent correctly

      signup(formData);
    }
  };

  return (
    <div className="min-h-screen grid lg:grid-cols-2">
      {/* LEFT SIDE */}
      <div className="flex flex-col justify-center items-center p-6 sm:p-12">
        <div className="w-full max-w-md space-y-8">
          {/* LOGO */}
          <div className="text-center mb-8">
            <div className="flex flex-col items-center gap-2 group">
              <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <MessageSquare />
              </div>
              <h1 className="text-2xl font-bold mt-2">Create Account</h1>
              <p className="text-base-content/60">
                Get started with your free account
              </p>
            </div>
          </div>

          {/* FORM */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className=" form-control ">
              <label className="input input-bordered flex items-center gap-2">
                <input
                  type="text"
                  value={formData.fullName}
                  onChange={(e) =>
                    setFormData({ ...formData, fullName: e.target.value })
                  }
                  className="grow"
                  placeholder="Full Name"
                />
                <User className="size-5 text-base-content/40" />
              </label>
            </div>

            <div className=" form-control ">
              <label className="input input-bordered flex items-center gap-2">
                <input
                  type="text"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="grow"
                  placeholder="E-mail"
                />
                <Mail className="size-5 text-base-content/40" />
              </label>
            </div>

            <div className="form-control">
              <label className="input input-bordered flex items-center gap-2">
                <input
                  type={showPassword ? "text" : "password"}
                  className="grow"
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                  placeholder="••••••"
                />
                <button
                  type={"button"}
                  className="   flex items-center"
                  onClick={() => setShowPassword((prev) => !prev)}
                >
                  {showPassword ? (
                    <EyeOff className="size-5 text-base-content/40" />
                  ) : (
                    <Eye className="size-5 text-base-content/40" />
                  )}
                </button>
              </label>
            </div>
            <button
              type="submit"
              disabled={isSigningUp}
              className="btn btn-active w-full"
            >
              {isSigningUp ? (
                <>
                  <Loader2 className="size-5 animate-spin" /> Loading...
                </>
              ) : (
                <div>Create Account</div>
              )}
            </button>
          </form>

          <div className="text-center">
            <p className="text-base-content/60">
              Already have an account?{" "}
              <Link to={"/login"} className="link link-primary">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* right side */}
      <AuthImagePattern
        title={"Join our community"}
        subTitle={"Connect with friends, share moments, and more"}
      />
    </div>
  );
};

export default SignUp;
