"use client";

import React from "react";

interface CardWrapperProps {
    children: React.ReactNode;
    className?: string;
    headerTitle?: string;
}

export default function CardWrapper({
    children,
    className = "",
    headerTitle = "ACE SPEC"
}: CardWrapperProps) {
    return (
        <div className="flex flex-col" style={{
            flexFlow: "row wrap",
        }}>
            <h2 className="text-[24rem] w-full bg-gray-400 pl-[12rem] font-bold">{headerTitle}</h2>
            <div
                className={`grid desktop:grid-cols-4 laptop:grid-cols-4 sp:grid-cols-3 grid-cols-2 ${className}`}
            >
                {children}
            </div>
        </div>
    );
}
