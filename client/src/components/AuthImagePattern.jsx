import React from "react";

const AuthImagePattern = ({ title, subTitle }) => {
  return (
    <div className="hidden lg:flex items-center justify-center bg-base-200 p-12">
      <div className="max-w-md text-center">
        <div className="grid grid-cols-3 gap-3 mb-8">
          {[...Array(9)].map((_, index) => (
            <div
              key={index}
              className={`aspect-square rounded-2xl bg-primary/10 ${
                index % 2 === 0 ? "animate-pulse" : ""
              }`}
            ></div>
          ))}
        </div>

        <h1 className="text-4xl font-bold mb-2">{title}</h1>
        <p className="text-base-content/60">{subTitle}</p>
      </div>
    </div>
  );
};

export default AuthImagePattern;
