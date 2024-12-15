'use client'

import React, { useEffect } from "react";
import { useSelector } from 'react-redux';

import Card from "@/components/card"
import TimePeriod from "@/components/timePeriod"
import LeftSidebar from "@/components/leftSidebar";
import RightSidebar from "@/components/rightSidebar";

export default function Page() {
  const market = useSelector((state) => state.cardSlice.market);
  const totalTickets = useSelector((state) => state.cardSlice.totalTickets);
  const selectedTickets = useSelector((state) => state.cardSlice.selectedTickets);

  useEffect(() => {
    console.log("market--->", market);
  }, [])

  return (
    <>
      <LeftSidebar />
      <div className="mb-[30rem] w-auto grow md:bg-red-400" >
        <p>カード採用率</p>
        <TimePeriod />
        <hr />

        <p>検索結果</p>
        <p>{market}会場 デッキ中 デッキ</p>
        <div className="grid desktop:grid-cols-4 laptop:grid-cols-3 sp:grid-cols-2 grid-cols-1">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
      <RightSidebar />
    </>
  )
}