'use client'

import React from "react";
import { useSelector, useDispatch } from 'react-redux';

export default function TimePeriod() {
  const selectedPeriod = useSelector((state) => state.cardSlice.selectedPeriod);
  return (
    // <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
    <div className="">
      <p>TimePeriod {selectedPeriod}</p>
    </div>
  );
}