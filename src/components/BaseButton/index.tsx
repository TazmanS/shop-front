import React, { FC } from "react";

type BaseButtonType = {
  color?: "blue" | "red" | "green" | "gray";
  size?: "sm" | "md" | "lg";
  variant?: "solid" | "outline";
  children: React.ReactNode;
  onClick?: () => void;
  type?: "submit" | "reset" | "button";
};

const BaseButton: FC<BaseButtonType> = ({
  color = "blue",
  size = "md",
  variant = "solid",
  children,
  onClick,
  type = "button",
}) => {
  const colorClasses = {
    blue: "bg-blue-500 text-white hover:bg-blue-600 active:bg-blue-700",
    red: "bg-red-500 text-white hover:bg-red-600 active:bg-red-700",
    green: "bg-green-500 text-white hover:bg-green-600 active:bg-green-700",
    gray: "bg-gray-500 text-white hover:bg-gray-600 active:bg-gray-700",
  };

  const sizeClasses = {
    sm: "px-3 py-2 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };

  const variantClasses = {
    solid: colorClasses[color],
    outline: `${colorClasses[color].replace(
      "bg-",
      "border-"
    )} border-2 bg-transparent`,
  };

  return (
    <button
      onClick={onClick}
      type={type}
      className={`rounded-md transition-all duration-200 ease-in-out ${sizeClasses[size]} ${variantClasses[variant]} active:scale-95`}
    >
      {children}
    </button>
  );
};

export default BaseButton;
