import React from "react";
import { Text } from "react-native";

export default function PText({ children }: { children?: React.ReactNode }) {
  return <Text>{children}</Text>;
}
