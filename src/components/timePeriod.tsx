'use client'

import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from '@/store/store';

export default function TimePeriod() {
  const selectedPeriod = useSelector((state: RootState) => state.cardSlice.selectedPeriod);
  return (
    // <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
    <div className=" outline-solid outline-[1rem] outline-solid">
      <span className="text-[16rem] outline outline-[1rem] outline-solid w-auto px-[4rem] py-[4rem]">
        {selectedPeriod}
      </span>
    </div>
  );
}