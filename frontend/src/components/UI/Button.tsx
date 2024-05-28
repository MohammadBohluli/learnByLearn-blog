import React from "react";

interface Props {
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
}

const Button = ({ onClick, children, className }: Props) => {
  return (
    <button onClick={onClick} className={className}>
      {children}
    </button>
  );
};

export default Button;
