'use client'

import React from "react";
import { useSelector } from 'react-redux';
import type { RootState } from '@/store/store';

export default function TimePeriod() {
  // const selectedPeriod = useSelector((state: RootState) => state.cardSlice.selectedPeriod);
  const startDate = useSelector((state: RootState) => state.cardSlice.startPeriod)
  const endDate = useSelector((state: RootState) => state.cardSlice.endPeriod)
  //  className=" outline-solid outline-[1rem] outline-solid"

  return (
    <div>
      <span className="text-[20rem] w-auto px-[4rem] py-[4rem]">
        {startDate} - {endDate}
      </span>
    </div>
  );
}