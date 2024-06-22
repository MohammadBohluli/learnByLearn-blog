import React from "react";

export interface Props extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const RowForm = ({ children }: Props) => {
  return <div className="mb-5">{children}</div>;
};

export default RowForm;
