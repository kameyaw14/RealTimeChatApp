import React from "react";
import { useAuthStore } from "../store/useAuthStore";
import { Link } from "react-router-dom";
import { LogOut, MessagesSquare, Settings, User } from "lucide-react";
const Navbar = () => {
  const { logout, isLoggingOut, authUser } = useAuthStore();

  const handleLogout = async () => {
    await logout();
  };

  return (
    <header className="bg-base-100 border-b border-base-300 fixed w-full top-0 z-40 backdrop-blur-lg bg-base-100/80">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link
          to="/"
          className="flex items-center gap-2.5 hover:opacity-80 transition-all"
        >
          <div className="size-9 rounded-lg bg-primary/10 flex items-center justify-center">
            <MessagesSquare className="size-5 text-primary" />
          </div>
          <h1 className="text-lg font-semibold"> Chat Room </h1>
        </Link>

        <div className="flex items-center gap-2">
          <Link to="/settings" className="btn btn-sm gap-2 transition-colors">
            <Settings className="size-4" />
            <span className="hidden sm:inline">Settings</span>
          </Link>

          {authUser && (
            <div className="flex items-center gap-2">
              <Link
                to="/profile"
                className="btn btn-sm gap-2 transition-colors"
              >
                <User className="size-4" />
                <span className="hidden sm:inline">Profile</span>
              </Link>

              <button
                onClick={handleLogout}
                className="btn btn-sm gap-2 transition-colors"
              >
                <LogOut className="size-4" />
                <span className="hidden sm:inline">Logout</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
