"use client";

import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "@/store/store";
import { DatePicker, Select, Space } from "antd";
import { SelectValue } from "antd/es/select";
import dynamic from 'next/dynamic';
import type { Dayjs } from 'dayjs';
import dayjs from 'dayjs';

import { Bar, BarChart, CartesianGrid, LabelList, XAxis, YAxis } from "recharts";
import { Card, CardContent } from "../../components/ui/card";
import { ChartConfig } from "@/components/ui/chart";

import CustomCard from "@/components/customCard";
import TimePeriod from "@/components/timePeriod";
import CardWrapper from "@/components/cardWrapper";

import { setDateRange } from "@/store/slices/cardSlice";

const ChartContainer = dynamic(() => import('@/components/ui/chart').then(mod => mod.ChartContainer), {
  ssr: false
});

const chartConfig: ChartConfig = {
    desktop: {
        label: "Desktop",
        color: "hsl(var(--chart-5))"
    }
};

interface Card {
    id: number;
    date?: string | Date;
    category?: string;
    name?: string;
    count?: number | string;
    image?: string;
    league?: string;
    row_counts: string;
    percentages: string;
    total_row_count?: string;
}

export default function Page() {
    const dispatch = useDispatch();

    const today = new Date();
    const sevenDaysAgo = new Date(today);
    sevenDaysAgo.setDate(today.getDate() - 7);
    const todayString = today.toISOString().split('T')[0];
    const sevenDaysAgoString = sevenDaysAgo.toISOString().split('T')[0];
    const initialToday = dayjs().subtract(0, 'days');
    const initialSevenDaysAgo = dayjs().subtract(7, 'days');

    const [filterObj, setFilterObj] = useState({
        league: "オープン",
        startDate: sevenDaysAgoString,
        endDate: todayString,
    });

    const initialChartData = [
        { month: "ポケモン", desktop: 20 },
        { month: "グッズ", desktop: 37 },
        { month: "どうぐ", desktop: 73 },
        { month: "サポート", desktop: 54 },
        { month: "スタジアム", desktop: 14 },
        { month: "エネルギー", desktop: 24 }
    ];

    const [tableData, setTableData] = useState(initialChartData);
    const [filterConditionFlag] = useState(true);
    const [cards, setCards] = useState<Card[]>([]);

    useEffect(() => {
        const totalCount = 0;
        const pokemonCount = 0;
        const goodsCount = 0;
        const douguCount = 0;
        const supportCount = 0;
        const stadiumCount = 0;
        const energyCount = 0;

        if(cards) {
            console.log("cards======>", cards);
            
            // cards.map((card) => {
            //     totalCount += card. || 0
            //     if (card.category === "ポケモン") pokemonCount += card. || 0
            //     else if (card.category === "グッズ") goodsCount += card. || 0
            //     else if (card.category === "どうぐ") douguCount += card. || 0
            //     else if (card.category === "サポート") supportCount += card. || 0
            //     else if (card.category === "スタジアム") stadiumCount += card. || 0
            //     else if (card.category === "エネルギー") energyCount += card. || 0
            // })
        }
        console.log("totalCount===>", totalCount)

        if (totalCount > 0) {
            const updatedData = initialChartData.map((item) => {
                if (item.month === "ポケモン") return { ...item, desktop: parseFloat(((pokemonCount / totalCount) * 100).toFixed(1)) };
                if (item.month === "グッズ") return { ...item, desktop: parseFloat(((goodsCount / totalCount) * 100).toFixed(1)) };
                if (item.month === "どうぐ") return { ...item, desktop: parseFloat(((douguCount / totalCount) * 100).toFixed(1)) };
                if (item.month === "サポート") return { ...item, desktop: parseFloat(((supportCount / totalCount) * 100).toFixed(1)) };
                if (item.month === "スタジアム") return { ...item, desktop: parseFloat(((stadiumCount / totalCount) * 100).toFixed(1)) };
                if (item.month === "エネルギー") return { ...item, desktop: parseFloat(((energyCount / totalCount) * 100).toFixed(1)) };
                return item; // Default case if no match
            });
    
            setTableData(updatedData); // Update the state with the new data
        }
    }, [cards])
    // const { market, totalTickets, selectedTickets, isSearchOpen } = useSelector(
    //     (state: RootState) => state.cardSlice
    // );
    const { isSearchOpen } = useSelector(
        (state: RootState) => state.cardSlice
    );

    const warningRef = useRef<HTMLParagraphElement>(null);

    useEffect(() => {
        setFilterObj((prev) => ({ ...prev, startDate: sevenDaysAgoString as string }))
        setFilterObj((prev) => ({ ...prev, endDate: todayString as string }))
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

            if (!response.ok) {
                // console.error('Here is Error:', response.status, response.statusText);
                return;
            }

            if (response.ok) {
                const data = await response.json();
                const filterdData = data[0];
                console.log("data====>", filterdData)
                setCards(filterdData);
            } else {
                console.error('Error:', response.status, response.statusText);
            }
        } catch (error) {
            // console.error('Fetch error:', error instanceof Error ? error.message : error);
        }
    };

    useEffect(() => {
        fetchCards();
        dispatch(setDateRange(filterObj))
    }, [filterObj]);

    const handleChange = (value: SelectValue) => {
        setFilterObj(prev => ({
            ...prev,
            league: value as string,
        }));
    };

    const onChangeStartDate = (date: Dayjs | null, dateString: string | string[]) => {
        setFilterObj(prev => ({
            ...prev,
            startDate: Array.isArray(dateString) ? dateString[0] : dateString
        }));
    };

    const onChangeEndDate = (date: Dayjs | null, dateString: string | string[]) => {
        setFilterObj(prev => ({
            ...prev,
            endDate: Array.isArray(dateString) ? dateString[0] : dateString
        }));
    };

    const onHandleSearch = () => {
        if(filterConditionFlag) {
            fetchCards();
        } else {
            if (warningRef.current) {
                warningRef.current.style.display = 'none';
            }
        }
    }
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
                                        defaultValue={initialSevenDaysAgo}
                                        picker="date"
                                        className="tablet:w-[136rem] w-[120rem]"
                                        allowClear={false}
                                        onChange={onChangeStartDate}
                                    />
                                </div>

                                <div className="flex flex-row items-center gap-[8rem]">
                                    <p className="text-[12rem] tablet:text-[18rem]">終了日:</p>
                                    <DatePicker
                                        defaultValue={initialToday}
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
                                        defaultValue="オープン"
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
                    <div>
                        <p className="text-[15rem] text-red-500 mt-[10rem] ml-[16rem]" ref={warningRef}>検索条件を正確に入力してください。</p>
                    </div>
                </div>
                
                <div>
                    <button className="text-[20rem] bg-slate-900 text-white px-[12rem] py-[6rem] radius" onClick={onHandleSearch}>検索</button>
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
                                <BarChart width={600} height={350} data={tableData}>
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

                <CardWrapper headerTitle="ポケモン">
                    {cards
                        .filter((item) => item.category === "ポケモン")
                        .map((item, index) => (
                            <CustomCard 
                                key={index}
                                // categoryString={item.category || "Unknown Category"}
                                rowCounts={item.row_counts}
                                // count={item.total_row_count && item.total_row_count}
                                percentages={item.percentages}
                                imgURL={item.image}
                                name={item.name}/>
                    ))}
                </CardWrapper>
                
                <CardWrapper headerTitle="グッズ">
                    {cards
                        .filter((item) => item.category === "グッズ")
                        .map((item, index) => (
                            <CustomCard 
                                key={index}
                                // categoryString={item.category || "Unknown Category"}
                                rowCounts={item.row_counts}
                                // count={item.total_row_count && item.total_row_count}
                                percentages={item.percentages}
                                imgURL={item.image}
                                name={item.name}/>
                    ))}
                   
                </CardWrapper>
                
                <CardWrapper headerTitle="どうぐ">
                    {cards
                        .filter((item) => item.category === "ポケモンのどうぐ")
                        .map((item, index) => (
                            <CustomCard
                                key={index}
                                // categoryString={item.category || "Unknown Category"}
                                rowCounts={item.row_counts}
                                // count={item.total_row_count && item.total_row_count}
                                percentages={item.percentages}
                                imgURL={item.image}
                                name={item.name}/>
                    ))}
                </CardWrapper>

                <CardWrapper headerTitle="サポート">
                    {cards
                        .filter((item) => item.category === "サポート")
                        .map((item, index) => (
                            <CustomCard
                                key={index}
                                // categoryString={item.category || "Unknown Category"}
                                rowCounts={item.row_counts}
                                // count={item.total_row_count && item.total_row_count}
                                percentages={item.percentages}
                                imgURL={item.image}
                                name={item.name}/>
                    ))}
                </CardWrapper>

                <CardWrapper headerTitle="スタジアム">
                    {cards
                        .filter((item) => item.category === "スタジアム")
                        .map((item, index) => (
                            <CustomCard 
                                key={index}
                                // categoryString={item.category || "Unknown Category"}
                                rowCounts={item.row_counts}
                                // count={item.total_row_count && item.total_row_count}
                                percentages={item.percentages}
                                imgURL={item.image}
                                name={item.name}/>
                    ))}
                </CardWrapper>

                <CardWrapper headerTitle="エネルギー">
                    {cards
                        .filter((item) => item.category === "エネルギー")
                        .map((item, index) => (
                            <CustomCard
                                key={index}
                                // categoryString={item.category || "Unknown Category"}
                                rowCounts={item.row_counts}
                                // count={item.total_row_count && item.total_row_count}
                                percentages={item.percentages}
                                imgURL={item.image}
                                name={item.name}/>
                    ))}
                </CardWrapper>
            </div>
        </>
    );
}