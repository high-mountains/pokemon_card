import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

import { DatePicker } from "antd";
import dayjs from "dayjs";
const { RangePicker } = DatePicker;

const rangePresets = [
    {
        label: "Last 7 Days",
        value: [dayjs().add(-7, "d"), dayjs()],
    },
    {
        label: "Last 14 Days",
        value: [dayjs().add(-14, "d"), dayjs()],
    },
    {
        label: "Last 30 Days",
        value: [dayjs().add(-30, "d"), dayjs()],
    },
    {
        label: "Last 90 Days",
        value: [dayjs().add(-90, "d"), dayjs()],
    },
];

const viewToday = new Date().getFullYear() + "-" + (new Date().getMonth() + 1);

export default function RightSidebar() {
    const isSearchOpen = useSelector(
        (state: RootState) => state.cardSlice.isSearchOpen
    );

    return (
        // <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <div
            className={`relative h-auto w-[268rem] bg-white shadow-lg overflow-y-auto top-[30rem] 
          tablet:${isSearchOpen ? "flex" : "hidden"}
          ${isSearchOpen ? "showMe" : "hiddenMe"}
          hidden
          tablet:flex
          flex-col gap-[8rem] px-[4rem] transition-all duration-300`}
        >
            <h3 className="mt-[20rem] text-[24rem] font-bold">検索条件</h3>

            <div>
                <p className="text-[18rem]">開始日</p>
                <DatePicker
                    // presets={rangePresets}
                    picker="date"
                    className="w-[136rem]"
                    // onChange={}
                    allowClear={false}
                    // defaultValue={dayjs(viewToday)}
                />
            </div>

            <div>
                <p className="text-[18rem]">終了日</p>
                <DatePicker
                    // presets={rangePresets}
                    picker="date"
                    className="w-[136rem]"
                    // onChange={}
                    allowClear={false}
                    // defaultValue={dayjs(viewToday)}
                />
            </div>
        </div>
    );
}
