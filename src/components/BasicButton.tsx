import React from "react";
import { TouchableOpacity, Text, ViewStyle } from "react-native";
import { colors } from "../utils/style-const";

export default function BasicButton({
  children,
  onPress,
  style = {},
}: {
  children?: React.ReactNode;
  style?: ViewStyle;
  onPress: (args: any) => void;
}) {
  return (
    <TouchableOpacity
      style={{
        alignSelf: "center",
        paddingVertical: 18,
        paddingHorizontal: 30,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        backgroundColor: colors.primary,
        flexDirection: "row",
        ...style,
      }}
      onPress={onPress}
    >
      <Text style={{ fontSize: 16, color: colors.white, fontWeight: "bold" }}>{children}</Text>
    </TouchableOpacity>
  );
}
