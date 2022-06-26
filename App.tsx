import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import FocusPage from "./src/features/focus/FocusPage";
import CountDown from "./src/features/timer/CountDown";
import TimerPage from "./src/features/timer/TimerPage";
import { IFocusItem } from "./src/utils/types";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function App() {
  const [isFocusing, setIsFocusing] = useState(false);
  const [focusItem, setFocusItem] = useState({ subject: "", completed: false } as IFocusItem);
  const [focusHistory, setFocusHistory] = useState([] as IFocusItem[]);

  const retrieveHistory = async () => {
    try {
      const history = await AsyncStorage.getItem("focusHistory");
      if (history !== null) {
        setFocusHistory(JSON.parse(history));
      } else {
        await AsyncStorage.setItem("focusHistory", JSON.stringify(focusHistory));
      }
    } catch (e) {
      // error reading value
      console.log(e);
    }
  };

  const updateHistory = async () => {
    try {
      await AsyncStorage.setItem("focusHistory", JSON.stringify(focusHistory));
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    retrieveHistory();
  }, []);

  useEffect(() => {
    updateHistory();
  }, [focusHistory]);

  useEffect(() => {
    if (!isFocusing && focusItem.subject.length !== 0) {
      setFocusHistory((old) => [...old, focusItem]);
      setFocusItem({ subject: "", completed: false });
    }
  }, [isFocusing]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar style="auto" />
      {isFocusing ? (
        <TimerPage setIsFocusing={setIsFocusing} focusItem={focusItem} setFocusItem={setFocusItem} />
      ) : (
        <FocusPage
          setIsFocusing={setIsFocusing}
          focusItem={focusItem}
          setFocusItem={setFocusItem}
          focusHistory={focusHistory}
        />
      )}
    </SafeAreaView>
  );
}
