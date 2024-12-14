import {
  DatePicker,
} from "antd";

import dayjs from "dayjs";

const { RangePicker } = DatePicker;
// import dayjs from "dayjs";

// const rangePresets = [
//   {
//     label: "Last 7 Days",
//     value: [dayjs().add(-7, "d"), dayjs()],
//   },
//   {
//     label: "Last 14 Days",
//     value: [dayjs().add(-14, "d"), dayjs()],
//   },
//   {
//     label: "Last 30 Days",
//     value: [dayjs().add(-30, "d"), dayjs()],
//   },
//   {
//     label: "Last 90 Days",
//     value: [dayjs().add(-90, "d"), dayjs()],
//   },
// ];

const viewToday = new Date().getFullYear() + "-" + (new Date().getMonth() + 1);

export default function RightSidebar() {
    return (
      // <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="absolute h-full w-auto bg-white shadow-lg overflow-y-auto right-0 top-0">
          <p>RightSidebar</p>
          <DatePicker
                // presets={rangePresets}
                picker="month"
                className="w-[200rem]"
                // onChange={}
                allowClear={false}
                // defaultValue={dayjs(viewToday)}
              />
      </div>
    );
  }