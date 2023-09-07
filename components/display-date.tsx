"use client"
import DateTimeDisplay from "@/lib/current-date";
import React from "react";

const DisplayDate = () => {
    const currentDay = DateTimeDisplay().currentDay;
    const currentTime = DateTimeDisplay().currentTime;
    return (
        <p className='flex items-center justify-between  text-xs md:text-lg font-bold text-purple-800'>
            <span data-testid="currentDayOfTheWeek"> {currentDay}</span>  <span data-testid="currentUTCTime" className=" ml-3">{currentTime} </span>
        </p>
    )
};

export default DisplayDate;
