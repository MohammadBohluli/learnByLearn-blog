import React from "react";

const AdminTitle = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className="mb-6 text-center text-4xl dark:text-white
     sm:mr-20 sm:text-right lg:mr-5"
    >
      <h3>{children}</h3>
    </div>
  );
};

export default AdminTitle;
