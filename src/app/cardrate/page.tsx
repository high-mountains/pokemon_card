"use client";

import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "@/store/store";
import { Chart } from "@/components/chart";
import { FaSearch } from "react-icons/fa";
import { setSearchOpen } from "@/store/slices/cardSlice";

import Card from "@/components/card";
import TimePeriod from "@/components/timePeriod";
import LeftSidebar from "@/components/leftSidebar";
import RightSidebar from "@/components/rightSidebar";
import CardWrapper from "@/components/cardWrapper";

export default function Page() {
    const dispatch = useDispatch(); // Add dispatch

    const { market, totalTickets, selectedTickets, isSearchOpen } = useSelector(
        (state: RootState) => state.cardSlice
    );

    const handleSearchClick = () => {
        dispatch(setSearchOpen(!isSearchOpen)); // Toggle the current value
        console.log("Hello, toogle ---->", isSearchOpen);
    };

    return (
        <>
            {/* <LeftSidebar /> */}
            <div className="mb-[30rem] w-auto grow md:bg-red-400 px-[16rem] flex flex-col gap-[14rem]">
                <div>
                    <div className="flex items-center justify-between mb-[4rem]">
                        <p className="text-[24rem]">カード採用率</p>
                        <FaSearch
                            className="w-[20rem] h-[20rem]"
                            onClick={handleSearchClick}
                        />
                    </div>
                    <TimePeriod />
                </div>
                <hr className="my-[6rem]" />

                <div>
                    <p className="text-[24rem]">検索結果</p>
                    <p className="text-[16rem]">
                        {market}会場 ● {totalTickets}デッキ中 {selectedTickets}
                        デッキ
                    </p>
                </div>
                {/*  */}
                {/* <p>hello Chart</p> */}
                <div className=" cursor-default w-full max-w-[906rem]">
                    {/* <Chart /> */}
                </div>

                <CardWrapper headerTitle="ACE SPEC">
                    <Card imgURL="./01.png" description="アンフェアスタンプ(ACE SPEC)" />
                    <Card imgURL="./02.png" description="プライムキャッチャー(ACE SPEC)" />
                    <Card imgURL="./03.png" description="シークレットボックス(ACE SPEC)" />
                    <Card imgURL="./04.png" description="偉大な大樹(ACE SPEC)"/>
                    <Card imgURL="./02.png" description="プライムキャッチャー(ACE SPEC)" />
                    <Card imgURL="./04.png" description="アクロマの実験"/>
                    <Card imgURL="./01.png" description="アンフェアスタンプ(ACE SPEC)" />
                    <Card imgURL="./03.png" description="シークレットボックス(ACE SPEC)" />
                    <Card imgURL="./03.png" description="シークレットボックス(ACE SPEC)" />
                    <Card imgURL="./01.png" description="アンフェアスタンプ(ACE SPEC)" />
                    <Card imgURL="./02.png" description="プライムキャッチャー(ACE SPEC)" />
                    <Card imgURL="./04.png" description="アクロマの実験" />
                    <Card imgURL="./04.png" description="アクロマの実験" />
                </CardWrapper>

                <CardWrapper headerTitle="ポケモン">
                    <Card imgURL="./dummy1.png" />
                    <Card imgURL="./dummy1.png" />
                    <Card imgURL="./dummy1.png" />
                    <Card imgURL="./dummy1.png" />
                </CardWrapper>
            </div>
            {/* <RightSidebar /> */}
        </>
    );
}
