import React from "react";
import { Text, View } from "react-native";
import { colors } from "../../utils/style-const";
import { IFocusItem } from "../../utils/types";

export default function FocusHistory({ focusHistory }: { focusHistory: IFocusItem[] }) {
  return (
    <View>
      <Text
        style={{
          textAlign: "center",
          color: colors.primary,
          fontSize: 24,
          fontWeight: "bold",
          paddingHorizontal: 20,
          marginBottom: 20,
        }}
      >
        Voilà ce que vous avez déjà fait :{" "}
      </Text>
      {focusHistory.length === 0 && (
        <Text style={{ textAlign: "center", fontSize: 16, color: colors.text }}>Vous n'avez encore rien fait</Text>
      )}
      {focusHistory.map((item, index) => {
        return (
          <Text
            style={{
              textAlign: "center",
              color: item.completed ? colors.right : colors.wrong,
              fontSize: 16,
              marginBottom: 10,
              fontWeight: "bold",
            }}
            key={index}
          >
            {item.subject}
          </Text>
        );
      })}
    </View>
  );
}
