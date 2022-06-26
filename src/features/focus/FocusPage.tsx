import React from "react";
import { View } from "react-native";
import { IFocusItem } from "../../utils/types";
import FocusHistory from "./FocusHistory";
import NewFocus from "./NewFocus";

export default function FocusPage({
  focusItem,
  setFocusItem,
  focusHistory,
  setIsFocusing,
}: {
  focusItem: IFocusItem;
  setFocusItem: React.Dispatch<React.SetStateAction<IFocusItem>>;
  setIsFocusing: React.Dispatch<React.SetStateAction<boolean>>;
  focusHistory: IFocusItem[];
}) {
  return (
    <View style={{ flex: 1, width: "100%" }}>
      <View style={{ flex: 0.5, justifyContent: "flex-start", paddingHorizontal: 20, paddingTop: 100 }}>
        <NewFocus focusItem={focusItem} setFocusItem={setFocusItem} setIsFocusing={setIsFocusing}></NewFocus>
      </View>
      <View style={{ flex: 0.5 }}>
        <FocusHistory focusHistory={focusHistory}></FocusHistory>
      </View>
    </View>
  );
}
