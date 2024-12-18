"use client";

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "@/store/store";
import { FaSearch } from "react-icons/fa";
import { setSearchOpen } from "@/store/slices/cardSlice";
import { DatePicker, Select, Space } from "antd";
import { SelectValue } from "antd/es/select";

// ==================SHADCN=================
import { Bar, BarChart, CartesianGrid, LabelList, XAxis, YAxis } from "recharts";

import {
    Card,
    CardContent,
} from "../../components/ui/card";

import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart";
// ==================SHADCN END==================

import CustomCard from "@/components/card";
import TimePeriod from "@/components/timePeriod";
import CardWrapper from "@/components/cardWrapper";

const chartData = [
    { month: "ACESPEC", desktop: 86 },
    { month: "ポケモン", desktop: 60 },
    { month: "グッズ", desktop: 37 },
    { month: "どうぐ", desktop: 73 },    
    { month: "サポート", desktop: 54 },
    { month: "ポケモン", desktop: 14 },
];
  const chartConfig = {
    desktop: {
      label: "Desktop",
      color: "hsl(var(--chart-1))",
    },
  } satisfies ChartConfig

export default function Page() {
    const dispatch = useDispatch(); // Add dispatch

    const { market, totalTickets, selectedTickets, isSearchOpen } = useSelector(
        (state: RootState) => state.cardSlice
    );

    const handleSearchClick = () => {
        dispatch(setSearchOpen(!isSearchOpen)); // Toggle the current value
        console.log("Hello, toogle ---->", isSearchOpen);
    };

    const handleChange = (value: SelectValue) => {
        console.log(`selected ${value}`);
    };
    return (
        <>
            <div className="mb-[30rem] w-auto grow md:bg-red-400 px-[16rem] flex flex-col gap-[14rem]">
                <div className="flex flex-col">
                    <h3 className="text-[24rem]">検索条件</h3>
                    <div>
                        <div
                            className={`h-auto w-[268rem] bg-white shadow-lg overflow-y-auto top-[30rem] 
            tablet:${isSearchOpen ? "flex" : "hidden"}
            ${isSearchOpen ? "showMe" : "hiddenMe"}
            hidden
            tablet:flex
            gap-[8rem] px-[8rem] py-[16rem] transition-all duration-300 w-full`}
                        >
                            <div className="flex flex-col tablet:flex-row tablet:gap-[8rem] gap-[6rem]">
                                <div className="flex flex-row gap-[8rem]">
                                    <div className="flex flex-row items-center  gap-[8rem]">
                                        <p className="text-[12rem] tablet:text-[18rem]">
                                            開始日:
                                        </p>
                                        <DatePicker
                                            picker="date"
                                            className="tablet:w-[136rem] w-[120rem]"
                                            allowClear={false}
                                        />
                                    </div>

                                    <div className="flex flex-row items-center gap-[8rem]">
                                        <p className="text-[12rem] tablet:text-[18rem]">
                                            終了日:
                                        </p>
                                        <DatePicker
                                            picker="date"
                                            className="tablet:w-[136rem] w-[120rem]"
                                            allowClear={false}
                                        />
                                    </div>
                                </div>

                                <div className="flex flex-row gap-[8rem]">
                                    <Space wrap>
                                        <Select
                                            prefix="全て"
                                            // defaultValue="lucy"
                                            style={{ width: "150rem" }}
                                            onChange={handleChange}
                                            options={[
                                                //   { value: '全て', label: '全て' },
                                                {
                                                    value: "オープン",
                                                    label: "オープン",
                                                },
                                                {
                                                    value: "マスタ",
                                                    label: "マスタ",
                                                },
                                                {
                                                    value: "ジュニア",
                                                    label: "ジュニア",
                                                },
                                                {
                                                    value: "シニア",
                                                    label: "シニア",
                                                },
                                                //   { value: 'disabled', label: 'Disabled', disabled: true },
                                            ]}
                                        />
                                    </Space>
                                    <Space wrap>
                                        <Select
                                            prefix="カテゴリ 1"
                                            // defaultValue="lucy"
                                            style={{ width: "150rem" }}
                                            onChange={handleChange}
                                            options={[
                                                //   { value: '全て', label: '全て' },
                                                {
                                                    value: "オープン",
                                                    label: "���ープン",
                                                },
                                                {
                                                    value: "マスタ",
                                                    label: "マスタ",
                                                },
                                                {
                                                    value: "ジュニア",
                                                    label: "ジュニア",
                                                },
                                                {
                                                    value: "シニア",
                                                    label: "シニア",
                                                },
                                                //   { value: 'disabled', label: 'Disabled', disabled: true },
                                            ]}
                                        />
                                    </Space>
                                    <Space wrap>
                                        <Select
                                            prefix="カテゴリ 2"
                                            // defaultValue="未選択"
                                            style={{ width: "150rem" }}
                                            onChange={handleChange}
                                            options={[
                                                {
                                                    value: "未選択",
                                                    label: "未選択",
                                                },
                                                {
                                                    value: "ドラパルト単",
                                                    label: "ドラパルト単",
                                                },
                                                {
                                                    value: "ボム",
                                                    label: "ボム",
                                                },
                                                {
                                                    value: "イバラ",
                                                    label: "イバラ",
                                                },
                                                {
                                                    value: "ネイティオ",
                                                    label: "ネイテ��オ",
                                                },
                                                //   { value: 'disabled', label: 'Disabled', disabled: true },
                                            ]}
                                        />
                                    </Space>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
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

                <div className="flex flex-col items-center justify-center">
                    <Card>
                        <CardContent>
                            <ChartContainer config={chartConfig}>
                                <BarChart
                                    width={600}
                                    height={350}
                                    accessibilityLayer={true}
                                    data={chartData}
                                >
                                    <CartesianGrid vertical={false} />
                                    <XAxis
                                        dataKey="month"
                                        tickLine={false}
                                        tickMargin={10}
                                        axisLine={false}
                                        tickFormatter={(value) =>
                                            value.slice(0, value.length)
                                        }
                                    />
                                    <YAxis 
                                        domain={[0, 100]} // Set min and max values: [min, max]
                                        axisLine={false}
                                        tickLine={false}
                                    />
                                    <ChartTooltip>
                                        <ChartTooltipContent />
                                    </ChartTooltip>
                                    <Bar
                                        dataKey="desktop"
                                        // fill="var(--color-desktop)"
                                        fill={chartConfig.desktop.color} 
                                        radius={8}
                                    >
                                        <LabelList
                                            position="top"
                                            offset={12}
                                            className="fill-foreground"
                                            fontSize={12}
                                            fontWeight={600}
                                        />
                                    </Bar>
                                </BarChart>
                            </ChartContainer>
                        </CardContent>
                    </Card>
                </div>

                <CardWrapper headerTitle="ACE SPEC">
                    <CustomCard
                        imgURL="/01.png"
                        description="アンフェアスタンプ(ACE SPEC)"
                    />
                    <CustomCard
                        imgURL="/02.png"
                        description="プライムキャッチャー(ACE SPEC)"
                    />
                    <CustomCard
                        imgURL="/03.png"
                        description="シークレットボックス(ACE SPEC)"
                    />
                    <CustomCard
                        imgURL="/04.png"
                        description="偉大な大樹(ACE SPEC)"
                    />
                    <CustomCard
                        imgURL="/02.png"
                        description="プライムキャッチャー(ACE SPEC)"
                    />
                    <CustomCard
                        imgURL="/04.png"
                        description="アクロマの実験"
                    />
                    <CustomCard
                        imgURL="/01.png"
                        description="アンフェアスタンプ(ACE SPEC)"
                    />
                    <CustomCard
                        imgURL="/03.png"
                        description="シークレットボックス(ACE SPEC)"
                    />
                    <CustomCard
                        imgURL="/03.png"
                        description="シークレットボックス(ACE SPEC)"
                    />
                    <CustomCard
                        imgURL="/01.png"
                        description="アンフェアスタンプ(ACE SPEC)"
                    />
                    <CustomCard
                        imgURL="/02.png"
                        description="プライムキャッチャー(ACE SPEC)"
                    />
                    <CustomCard
                        imgURL="/04.png"
                        description="アクロマの実験"
                    />
                    <CustomCard
                        imgURL="/04.png"
                        description="アクロマの実験"
                    />
                </CardWrapper>

                <CardWrapper headerTitle="ポケモン">
                    <CustomCard imgURL="/dummy1.png" />
                    <CustomCard imgURL="/dummy1.png" />
                    <CustomCard imgURL="/dummy1.png" />
                    <CustomCard imgURL="/dummy1.png" />
                </CardWrapper>

                <CardWrapper headerTitle="グッズ">
                    <CustomCard imgURL="/goods.png" />
                    <CustomCard imgURL="/goods.png" />
                    <CustomCard imgURL="/goods.png" />
                    <CustomCard imgURL="/goods.png" />
                    <CustomCard imgURL="/goods.png" />
                </CardWrapper>

                <CardWrapper headerTitle="どうぐ">
                    <CustomCard imgURL="/dogs.png" />
                    <CustomCard imgURL="/dogs.png" />
                    <CustomCard imgURL="/dogs.png" />
                    <CustomCard imgURL="/dogs.png" />
                    <CustomCard imgURL="/dogs.png" />
                </CardWrapper>

                <CardWrapper headerTitle="サポート">
                    <CustomCard imgURL="/support.png" />
                    <CustomCard imgURL="/support.png" />
                    <CustomCard imgURL="/support.png" />
                    <CustomCard imgURL="/support.png" />
                    <CustomCard imgURL="/support.png" />
                </CardWrapper>
            </div>
        </>
    );
}
