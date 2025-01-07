"use client";

import React from "react";
import Image from "next/image";

interface CardWrapperProps {
    categoryString: string;
    imgURL?: string;
    name?: string;
    count: number;
}

export default function CustomCard({ categoryString, imgURL, name, count }: CardWrapperProps) {
    const BASE_URL = "https://www.pokemon-card.com";
    const imageUrl = imgURL ? `${BASE_URL}${imgURL}` : "/dummy1.png"; // Fallback for missing image
    // const displayName = name || "Unknown Card"; // Fallback for missing name
    const displayName = name 
        ? name.replace(/([A-Za-z0-9]+\/[A-Za-z0-9]+|[A-Za-z0-9]+)$/, '').trim() // Remove the last part of the name (English letters/numbers)
        : "Unknown Card"; // Fallback for missing name
        
    return (
        <div
            className="py-16 px-24 tablet:px-72 laptop:mx-40 tablet:mx-40 mx-24 tablet:my-56 my-32 w-auto flex flex-col items-center 
                       shadow-lg hover:shadow-xl transition-shadow duration-300 hover:shadow-green-400/80 rounded-32"
        >
            <div className="rounded-32 w-11/12 h-auto overflow-hidden">
                <Image
                    src={imageUrl}
                    alt={displayName}
                    className="w-full h-full object-cover rounded-48 hover:scale-110 transition-transform duration-300"
                    width={400}
                    height={400}
                />
            </div>
            <div className="w-full flex flex-col items-start mt-84">
                <p className="text-16 font-bold mb-16 truncate">{displayName}</p>
                <div className="w-full flex flex-row justify-between text-16">
                    <span>{`${count}枚`}</span>
                    <span>{categoryString}</span>
                </div>
            </div>
        </div>
    );
}
