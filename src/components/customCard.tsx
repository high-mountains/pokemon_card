"use client";

import React from "react";
import Image from "next/image";

interface CardWrapperProps {
    // categoryString: string;
    imgURL?: string;
    name?: string;
    // count: number | string |undefined;
    percentages: string;
    rowCounts:  string ;
}

export default function CustomCard({ imgURL, name, rowCounts, percentages }: CardWrapperProps) {
// export default function CustomCard({ categoryString, name, count }: CardWrapperProps) {
    const BASE_URL = "https://www.pokemon-card.com";
    const imageUrl = imgURL ? `${BASE_URL}${imgURL}` : "/dummy1.png"; // Fallback for missing image
    // const displayName = name || "Unknown Card"; // Fallback for missing name
    // const displayName = name 
    //     ? name.replace(/([A-Za-z0-9]+\/[A-Za-z0-9]+|[A-Za-z0-9]+)$/, '').trim() // Remove the last part of the name (English letters/numbers)
    //     : "Unknown Card"; // Fallback for missing name

    // Split the strings into arrays
    const rowCountsArray = rowCounts.split(',').map(Number); // Convert to numbers
    const percentagesArray = percentages.split(',').map(Number); // Convert to numbers

    const result = rowCountsArray.map((count, index) => ({
        count: count,
        percentage: percentagesArray[index] // Match the same index
    }));
    return (
        <div
            className="py-16 px-24 tablet:px-72 laptop:mx-40 tablet:mx-40 mx-24 tablet:my-56 my-32 w-auto flex flex-col items-center shadow-lg hover:shadow-xl transition-shadow duration-300 hover:shadow-green-400/80 rounded-[8rem]"
        >
            <div className="rounded-32 w-11/12 h-auto overflow-hidden">
                <Image
                    src={imageUrl}
                    // alt={displayName}
                    alt="test_alt"
                    className="w-full h-full object-cover rounded-48"
                    width={400}
                    height={400}
                    onError={(e) => {
                        e.currentTarget.src = '/dummy.webp'; // Local fallback image
                    }}
                />
            </div>
            <div className="w-full flex flex-col items-start mt-84">
                <span className="mt-12 text-[16rem] font-bold mb-16">{name}</span>
                {
                    result && result.map((item, index) => (
                        <div key={index} className="w-full flex flex-row justify-between text-16">
                            <span>{`${item.count}枚`}</span>
                            <span>{`${item.percentage}%`}</span>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}
