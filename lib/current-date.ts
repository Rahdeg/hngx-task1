"use client";
import React, { useEffect, useState } from "react";
import moment from "moment-timezone";

function DateTimeDisplay() {
  const [currentDay, setCurrentDay] = useState("");
  const [currentUTCTime, setCurrentUTCTime] = useState("");

  useEffect(() => {
    // Get the current UTC time
    const utcTime = moment.utc();
    setCurrentUTCTime(utcTime.format("HH:mm:ss"));

    // Get the current day of the week
    const dayOfWeek = utcTime.format("dddd");
    setCurrentDay(dayOfWeek);
  }, []);

  return {
    currentDay: currentDay,
    currentTime: currentUTCTime,
  };
}

export default DateTimeDisplay;
