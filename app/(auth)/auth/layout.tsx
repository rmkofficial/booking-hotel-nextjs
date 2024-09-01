import React from "react";

interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return <div>
    logo
    {children}
    logo
  </div>;
};

export default AuthLayout;
