import React from "react";

const AdminTitlePage = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className="mb-6 text-center text-4xl text-white
     sm:mr-20 sm:text-right lg:mr-5"
    >
      <h3>{children}</h3>
    </div>
  );
};

export default AdminTitlePage;