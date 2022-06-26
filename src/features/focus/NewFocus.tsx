import React, { useState } from "react";
import { View, TextInput, Text } from "react-native";
import BasicButton from "../../components/BasicButton";
import { colors } from "../../utils/style-const";
import { IFocusItem } from "../../utils/types";

export default function NewFocus({
  focusItem,
  setFocusItem,
  setIsFocusing,
}: {
  focusItem: IFocusItem;
  setFocusItem: React.Dispatch<React.SetStateAction<IFocusItem>>;
  setIsFocusing: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [subject, setSubject] = useState("");

  return (
    <View>
      <Text style={{ textAlign: "center", marginBottom: 10, fontSize: 16, color: colors.text }}>
        Quelle est la prochaine tâche ?
      </Text>
      <TextInput
        style={{ backgroundColor: colors.background, fontSize: 24, padding: 20, borderRadius: 10, marginBottom: 20 }}
        value={subject}
        onChangeText={(val) => {
          setSubject(val);
        }}
      ></TextInput>
      {subject.length !== 0 && (
        <BasicButton
          onPress={() => {
            setFocusItem({ subject, completed: false });
            setIsFocusing(true);
          }}
        >
          C'est Parti
        </BasicButton>
      )}
    </View>
  );
}
