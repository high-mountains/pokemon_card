import {
  DatePicker,
} from "antd";

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
  return (
    // <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
    <div className="h-auto w-auto bg-white shadow-lg overflow-y-auto right-0 top-0 flex flex-col gap-[14rem]">
      <h3 className="bg-red-400 mt-[20rem]">検索条件</h3>

      <div>
        <p>開始日</p>
        <DatePicker
          // presets={rangePresets}
          picker="date"
          className="w-[100rem]"
          // onChange={}
          allowClear={false}
        // defaultValue={dayjs(viewToday)}
        />
      </div>

      <div>
        <p>終了日</p>
        <DatePicker
          // presets={rangePresets}
          picker="date"
          className="w-[100rem]"
          // onChange={}
          allowClear={false}
        // defaultValue={dayjs(viewToday)}
        />
      </div>
    </div>
  );
}