import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import BasicButton from "../../components/BasicButton";
import SecondaryButton from "../../components/SecondaryButton";
import { colors } from "../../utils/style-const";
import { IFocusItem } from "../../utils/types";
import CountDown from "./CountDown";

export default function TimerPage({
  focusItem,
  setFocusItem,
  setIsFocusing,
}: {
  focusItem: IFocusItem;
  setFocusItem: React.Dispatch<React.SetStateAction<IFocusItem>>;
  setIsFocusing: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [initialMinutes, setInitialMinutes] = useState(10);
  const [start, setStart] = useState(false);
  const [isFinish, setIsFinish] = useState(false);

  useEffect(() => {
    isFinish && setFocusItem((old) => ({ ...old, completed: true }));
  }, [isFinish]);

  return (
    <View style={{ flex: 1, width: "100%" }}>
      <View style={{ flex: 0.5, justifyContent: "center", alignItems: "center" }}>
        <Text style={{ fontSize: 40, fontWeight: "bold", textAlign: "center" }}>{focusItem.subject}</Text>
        <CountDown
          initialMinutes={initialMinutes}
          start={start}
          setStart={setStart}
          setIsFinish={setIsFinish}
        ></CountDown>
      </View>
      <View style={{ flex: 0.5, justifyContent: "space-evenly", alignItems: "center" }}>
        <BasicButton
          onPress={() => {
            if (start) {
              setStart(false);
            } else {
              setStart(true);
            }
          }}
          style={{ backgroundColor: start ? colors.wrong : colors.primary }}
        >
          {start ? "Pause" : "Commencer"}
        </BasicButton>
        {!start && (
          <View style={{ flexDirection: "row", justifyContent: "space-between", width: "100%", paddingHorizontal: 20 }}>
            <SecondaryButton
              onPress={() => {
                setInitialMinutes(10);
              }}
            >
              10
            </SecondaryButton>
            <SecondaryButton
              onPress={() => {
                setInitialMinutes(15);
              }}
            >
              15
            </SecondaryButton>
            <SecondaryButton
              onPress={() => {
                setInitialMinutes(20);
              }}
            >
              20
            </SecondaryButton>
          </View>
        )}
        {isFinish ? (
          <BasicButton
            onPress={() => {
              setIsFocusing(false);
            }}
          >
            Nouvelle Tâche ?
          </BasicButton>
        ) : (
          <Text
            style={{ color: colors.wrong }}
            onPress={() => {
              setIsFocusing(false);
            }}
          >
            Annuler
          </Text>
        )}
      </View>
    </View>
  );
}
