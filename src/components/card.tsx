"use client";

import React from "react";

interface CardWrapperProps {
    imgURL?: string;
    description?: string;
}

export default function Card({ imgURL, description }: CardWrapperProps) {
    return (
        <div className="py-[4rem] tablet:px-[18rem] px-[6rem] w-auto flex flex-col items-center laptop:mx-[10rem] tablet:mx-[10rem] mx-[6rem] tablet:my-[14rem] my-[8rem] shadow-lg hover:shadow-xl transition-shadow duration-300 hover:shadow-green-200/30 rounded-[8rem]">
            <div className="imageWrapper rounded-[8rem] w-[96%] h-[96%]">
                <img src={imgURL} alt="dummy.webp" className="w-[100%] h-[100%] rounded-[12rem]" />
            </div>
            <div className="w-full flex flex-col items-start self-start mt-[21rem] ">
                <div className="w-full flex flex-col items-start justify-start">
                    <p className="text-[16rem] mb-[4rem] h-[48rem] bottom-0">{description}</p>
                </div>
                <div className="grow w-full flex flex-row justify-between text-[16rem] mt-[0rem]">
                    <p>1枚</p>
                    <p>7.3%</p>
                </div>
            </div>
        </div>
    );
}