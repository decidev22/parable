import {
  NativeEventEmitter,
  NativeModules,
  Text,
  View,
  TextProps,
} from "react-native";

import React, { useState } from "react";
import { Button } from "react-native";
import DatePicker from "react-native-date-picker";

export default function HomeScreen() {
  const [startdate, setStartDate] = useState(new Date());
  const [openStartDate, setOpenStartDate] = useState(false);

  const [endDate, setEndDate] = useState(new Date());
  const [openEndDate, setOpenEndDate] = useState(false);

  // Create box per month
  const createBox = (startDate: Date, endDate: Date) => {
    let isNegative: boolean = false;
    const timeInMs = Math.abs(startDate.getTime() - endDate.getTime());
    let timeLeft: number = timeInMs;

    // Set Sign of number
    if (startDate.getTime() - endDate.getTime() < 0) {
      isNegative = true;
    }

    // Reverse order for calculation
    let timeInYear = timeLeft / 1000 / 60 / 60 / 24 / 30.4167 / 12;
    let numberOfWholeYear = 0;

    if (timeInYear >= 1) {
      numberOfWholeYear = Math.floor(timeInYear);
      timeLeft =
        (timeInYear - numberOfWholeYear) * 1000 * 60 * 60 * 24 * 30.4167 * 12;
    }

    let timeInMonth = timeLeft / 1000 / 60 / 60 / 24 / 30.4167;
    let numberOfWholeMonth = 0;

    if (timeInMonth >= 1) {
      numberOfWholeMonth = Math.floor(timeInMonth);
      timeLeft =
        (timeInMonth - numberOfWholeMonth) * 1000 * 60 * 60 * 24 * 30.4167;
    }

    let timeInWeek = timeLeft / 1000 / 60 / 60 / 24 / 7;
    let numberOfWholeWeek = 0;

    if (timeInWeek >= 1) {
      numberOfWholeWeek = Math.floor(timeInWeek);
      timeLeft = (timeInWeek - numberOfWholeWeek) * 1000 * 60 * 60 * 24 * 7;
    }

    let timeInDay = timeLeft / 1000 / 60 / 60 / 24;
    let numberOfWholeDay = 0;

    if (timeInDay >= 1) {
      numberOfWholeDay = Math.floor(timeInDay);
      timeLeft = (timeInDay - numberOfWholeDay) * 1000 * 60 * 60 * 24;
    }

    return (
      <Text className="text-white">
        {isNegative ? "Positive" : "Negative"} {numberOfWholeYear} Years,{" "}
        {numberOfWholeMonth} Months, {numberOfWholeWeek} Weeks, and{" "}
        {numberOfWholeDay} Days{" "}
      </Text>
    );
  };

  return (
    <>
      {/* Screen */}
      <View className="flex-1 bg-black">
        {/* Under the notch */}
        <View className="mt-[50px] ml-2 mr-2">
          {/* Title */}
          <Text className="text-red-200 text-[25px] font-bold">Parable</Text>
          {/* Planner box container */}
          <View className="w-full h-full bg-gray-900">
            <Text className="text-white">Select the start year</Text>
            {/* Yearly View */}
            <View className="flex-row">
              <Button
                title="Start Date"
                onPress={() => setOpenStartDate(true)}
              />
              <DatePicker
                modal
                mode="date"
                open={openStartDate}
                date={startdate}
                onConfirm={(date) => {
                  setOpenStartDate(false);
                  setStartDate(date);
                }}
                onCancel={() => {
                  setOpenStartDate(false);
                }}
              />
              <Button title="End Date" onPress={() => setOpenEndDate(true)} />
              <DatePicker
                modal
                mode="date"
                open={openEndDate}
                date={endDate}
                onConfirm={(date) => {
                  setOpenEndDate(false);
                  setEndDate(date);
                }}
                onCancel={() => {
                  setOpenEndDate(false);
                }}
              />
            </View>
            <View>
              <Text className="text-white">
                {startdate.toDateString()} To {endDate.toDateString()}
              </Text>
              {createBox(startdate, endDate)}
            </View>
          </View>
        </View>
      </View>
    </>
  );
}
