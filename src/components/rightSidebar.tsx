import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

import { DatePicker } from "antd";

export default function RightSidebar() {
    const isSearchOpen = useSelector(
        (state: RootState) => state.cardSlice.isSearchOpen
    );

    return (
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
                    picker="date"
                    className="w-[136rem]"
                    allowClear={false}
                />
            </div>

            <div>
                <p className="text-[18rem]">終了日</p>
                <DatePicker
                    picker="date"
                    className="w-[136rem]"
                    allowClear={false}
                />
            </div>
        </div>
    );
}
