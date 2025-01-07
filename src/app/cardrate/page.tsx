"use client";

import React, { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import type { RootState } from "@/store/store";
import { DatePicker, Select, Space } from "antd";
import { SelectValue } from "antd/es/select";
import dynamic from 'next/dynamic';
import type { Dayjs } from 'dayjs';

import { Bar, BarChart, CartesianGrid, LabelList, XAxis, YAxis } from "recharts";
import { Card, CardContent } from "../../components/ui/card";
import { ChartConfig } from "@/components/ui/chart";

import CustomCard from "@/components/customCard";
import TimePeriod from "@/components/timePeriod";
import CardWrapper from "@/components/cardWrapper";

const ChartContainer = dynamic(() => import('@/components/ui/chart').then(mod => mod.ChartContainer), {
  ssr: false
});

const chartData = [
    { month: "ACESPEC", desktop: 86 },
    { month: "ポケモン", desktop: 60 },
    { month: "グッズ", desktop: 37 },
    { month: "どうぐ", desktop: 73 },
    { month: "サポート", desktop: 54 },
    { month: "ポケモン", desktop: 14 }
];

const chartConfig: ChartConfig = {
    desktop: {
        label: "Desktop",
        color: "hsl(var(--chart-5))"
    }
};

// API response and processed data types
// interface ApiCard {
//     id: number;
//     date: Date;
//     category: string;
//     name: string;
//     count: number;
//     image: string;
//     league: string;
// }

interface Card {
    id: number;
    date: Date;
    category: string;
    name: string;
    count: number;
    image: string;
    league: string;
}

export default function Page() {
    const [filterObj, setFilterObj] = useState({
        league: "",
        startDate: "",
        endDate: "",
    });

    const { market, totalTickets, selectedTickets, isSearchOpen } = useSelector(
        (state: RootState) => state.cardSlice
    );

    const [cards, setCards] = useState<Card[]>([]);

    const selectElement = useRef();
    useEffect(() => {
        const today = new Date();
    
        // Get the date 7 days ago
        const sevenDaysAgo = new Date(today);
        sevenDaysAgo.setDate(today.getDate() - 7);
    
        // Convert both dates to string in the desired format (ISO string)
        const todayString = today.toISOString().split('T')[0]; // yyyy-mm-dd
        const sevenDaysAgoString = sevenDaysAgo.toISOString().split('T')[0]; // yyyy-mm-dd
        
        setFilterObj((prev) => ({ ...prev, startDate: todayString as string }))
        setFilterObj((prev) => ({ ...prev, endDate: sevenDaysAgoString as string }))
        console.log("Today: " + todayString);
        console.log("7 Days Ago: " + sevenDaysAgoString);
    }, [])

    const fetchCards = async () => {
        try {
            const response = await fetch('http://localhost:5000/api/cards', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(filterObj)
            });

            if (response.ok) {
                const data = await response.json();
                // console.log(response)
                setCards(data);
            } else {
                console.error('Error:', response.status, response.statusText);
            }
        } catch (error) {
            console.error('Fetch error:', error instanceof Error ? error.message : error);
        }
    };

    useEffect(() => {
        console.log("filterObj==>", filterObj)
        fetchCards();
    }, [filterObj]); // Only re-fetch data when filterObj changes

    const handleChange = (value: SelectValue) => {
        setFilterObj(prev => ({
            ...prev,
            league: value as string, // Make sure the value is treated as a string
        }));
    };

    const onChangeStartDate = (date: Dayjs | null, dateString: string) => {
        setFilterObj(prev => ({ ...prev, startDate: dateString }));
    };

    const onChangeEndDate = (date: Dayjs | null, dateString: string) => {
        setFilterObj(prev => ({ ...prev, endDate: dateString }));
    };

    return (
        <>
            <div className="mb-[30rem] w-auto grow md:bg-red-400 px-[16rem] flex flex-col gap-[14rem]">
                <div className="flex flex-col">
                    <h3 className="text-[24rem]">検索条件</h3>
                    <div className={`h-auto w-[268rem] bg-white shadow-lg overflow-y-auto top-[30rem] 
                        tablet:${isSearchOpen ? "flex" : "hidden"} 
                        ${isSearchOpen ? "showMe" : "hiddenMe"} hidden
                        tablet:flex gap-[8rem] px-[8rem] py-[16rem] transition-all duration-300 w-full`}>
                        <div className="flex flex-col tablet:flex-row tablet:gap-[8rem] gap-[6rem]">
                            <div className="flex flex-row gap-[8rem]">
                                <div className="flex flex-row items-center gap-[8rem]">
                                    <p className="text-[12rem] tablet:text-[18rem]">開始日:</p>
                                    <DatePicker
                                        picker="date"
                                        className="tablet:w-[136rem] w-[120rem]"
                                        allowClear={false}
                                        onChange={onChangeStartDate}
                                    />
                                </div>

                                <div className="flex flex-row items-center gap-[8rem]">
                                    <p className="text-[12rem] tablet:text-[18rem]">終了日:</p>
                                    <DatePicker
                                        picker="date"
                                        className="tablet:w-[136rem] w-[120rem]"
                                        allowClear={false}
                                        onChange={onChangeEndDate}
                                    />
                                </div>
                            </div>

                            <div className="flex flex-row gap-[8rem]">
                                <Space wrap>
                                    <Select
                                        style={{ width: "150rem" }}
                                        onChange={handleChange}
                                        options={[
                                            { value: "オープン", label: "オープン" },
                                            { value: "マスタ", label: "マスタ" },
                                            { value: "ジュニア", label: "ジュニア" },
                                            { value: "シニア", label: "シニア" },
                                        ]}
                                    />
                                </Space>
                                <Space wrap>
                                    <Select
                                        style={{ width: "150rem" }}
                                        options={[
                                            { value: "オープン", label: "オープン" },
                                            { value: "マスタ", label: "マスタ" },
                                            { value: "ジュニア", label: "ジュニア" },
                                            { value: "シニア", label: "シニア" },
                                        ]}
                                    />
                                </Space>
                                <Space wrap>
                                    <Select
                                        style={{ width: "150rem" }}
                                        options={[
                                            { value: "未選択", label: "未選択" },
                                            { value: "ドラパルト単", label: "ドラパルト単" },
                                            { value: "ボム", label: "ボム" },
                                            { value: "イバラ", label: "イバラ" },
                                            { value: "ネイティオ", label: "ネイティオ" },
                                        ]}
                                    />
                                </Space>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div>
                    <p className="text-[24rem]">カード採用率</p>
                    <TimePeriod />
                </div>
                <hr className="my-[6rem]" />

                <div>
                    <p className="text-[24rem]">検索結果</p>
                    <p className="text-[16rem]">
                        {/* {market}会場 ● {totalTickets}デッキ中 {selectedTickets} デッキ */}
                    </p>
                </div>

                <div className="flex flex-col items-center justify-center">
                    <Card>
                        <CardContent>
                            <ChartContainer config={chartConfig}>
                                <BarChart width={600} height={350} data={chartData}>
                                    <CartesianGrid vertical={false} />
                                    <XAxis dataKey="month" tickLine={false} tickMargin={10} axisLine={false} />
                                    <YAxis domain={[0, 100]} axisLine={false} tickLine={false} />
                                    <Bar dataKey="desktop" fill={chartConfig.desktop.color} radius={8}>
                                        <LabelList position="top" offset={12} className="fill-foreground" fontSize={12} fontWeight={600} />
                                    </Bar>
                                </BarChart> 
                            </ChartContainer> 
                        </CardContent>
                    </Card>
                </div>

                <CardWrapper headerTitle="ACE SPEC">
                    {["01.png", "02.png", "03.png", "04.png"].map((img, idx) => (
                        <CustomCard key={idx} imgURL={`/${img}`} description="カード詳細" />
                    ))}
                </CardWrapper>

                <CardWrapper headerTitle="ポケモン">
                    <CustomCard imgURL="/dummy1.png" />
                    <CustomCard imgURL="/dummy1.png" />
                </CardWrapper>

                <CardWrapper headerTitle="グッズ">
                    <CustomCard imgURL="/goods.png" />
                    <CustomCard imgURL="/goods.png" />
                </CardWrapper>

                <CardWrapper headerTitle="どうぐ">
                    <CustomCard imgURL="/dogs.png" />
                </CardWrapper>

                <CardWrapper headerTitle="サポート">
                    <CustomCard imgURL="/support.png" />
                </CardWrapper>
            </div>
        </>
    );
}