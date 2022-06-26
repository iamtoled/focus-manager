import React from "react";
import { Text, View } from "react-native";
import BasicButton from "../../components/BasicButton";
import { useCountdown } from "../../utils/custom-hooks";
import { colors } from "../../utils/style-const";

export default function CountDown({
  initialMinutes,
  start,
  setStart,
  setIsFinish,
}: {
  initialMinutes: number;
  start: boolean;
  setStart: React.Dispatch<React.SetStateAction<boolean>>;
  setIsFinish: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const { minutes, seconds } = useCountdown({ initialMinutes, start, setStart, setIsFinish });

  return (
    <View style={{ width: "100%", padding: 40 }}>
      <View
        style={{
          flexDirection: "row",
          backgroundColor: colors.background,
          borderRadius: 20,
          padding: 20,
          marginBottom: 20,
        }}
      >
        <Text
          style={{
            flex: 1,
            fontWeight: "bold",
            fontSize: 40,
            color: colors.primary,
            textAlign: "center",
          }}
        >
          {minutes}
        </Text>
        <Text
          style={{
            flex: 0.5,
            fontWeight: "bold",
            fontSize: 40,
            color: colors.primary,
            textAlign: "center",
          }}
        >
          :
        </Text>
        <Text
          style={{
            flex: 1,
            fontWeight: "bold",
            fontSize: 40,
            color: colors.primary,
            textAlign: "center",
          }}
        >
          {seconds}
        </Text>
      </View>
    </View>
  );
}
