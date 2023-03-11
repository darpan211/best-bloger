import CalendarIcon from "@/components/svgs/calendar";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { TbClock } from "react-icons/tb";
import styles from "../inputs/inputs.module.css";

const DateComponent = ({ subscriptionPage, onChange, value, disable }) => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div className={`flex items-center justify-between w-full gap-2`}>
      <div className="text-sm text-white w-[60%]">
        <div className={`flex items-center ${styles.inputPick} h-[42px]`}>
          <div className={`flex items-center  px-2`}>
            <CalendarIcon />
          </div>
          <DatePicker
            className={`${
              disable ? "text-white/[0.2]" : "text-white"
            }  pl-4 flex items-center bg-transparent focus:border-transparent focus:ring-0 focus:outline-none`}
            dateFormat="MMM dd, yyyy"
            disabled={disable}
            showYearDropdown
            dateFormatCalendar="MMMM"
            yearDropdownItemNumber={100}
            scrollableYearDropdown
            selected={startDate}
            onChange={(date) => {
              onChange(date);
              setStartDate(date);
            }}
          />
        </div>
      </div>
      <div className="text-sm text-white w-[40%]">
        <div className={`flex items-center ${styles.inputPick} h-[42px]`}>
          <div className={`flex items-center px-2 text-2xl`}>
            <TbClock />
          </div>
          <DatePicker
            className={`${
              disable ? "text-white/[0.2]" : "text-white"
            } pl-3 bg-transparent focus:border-transparent focus:ring-0 focus:outline-none`}
            selected={startDate}
            onChange={(date) => {
              onChange(date);
              setStartDate(date);
            }}
            showTimeSelect
            showTimeSelectOnly
            timeIntervals={15}
            timeCaption="Time"
            dateFormat="h:mm"
            disabled={disable}
          />
        </div>
      </div>
    </div>
  );
};

export default DateComponent;
