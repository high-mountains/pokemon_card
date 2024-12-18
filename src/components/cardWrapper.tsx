"use client";

import React, { useState, useEffect } from "react";

interface CardWrapperProps {
  children: React.ReactNode;
  className?: string;
  headerTitle?: string;
}

const CardWrapper: React.FC<CardWrapperProps> = ({
  children,
  className = "",
  headerTitle = "ACE SPEC",
}) => {
  // Local state to handle hydration issues
  const [isMounted, setIsMounted] = useState(false);

  // Ensure that the component is only rendered on the client side
  useEffect(() => {
    setIsMounted(true); // After the component mounts, update the state
  }, []);

  if (!isMounted) {
    return null; // Prevent rendering the component until after the mount
  }

  return (
    <div className="flex flex-col" style={{ flexFlow: "row wrap" }}>
      <h2 className="text-[24rem] font-bold w-full bg-gray-400 pl-[12rem]">{headerTitle}</h2>
      <div
        className={`grid grid-cols-2 sp:grid-cols-3 laptop:grid-cols-4 desktop:grid-cols-4 ${className}`}
      >
        {children}
      </div>
    </div>
  );
};

export default CardWrapper;
