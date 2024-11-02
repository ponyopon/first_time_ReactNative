import React from "react";
import { TouchableOpacity, FontAwesome } from "react-native";

export const ClipButton = ({ onPress, enabled }) => {
  const name = enabled ? "bookmark" : "bookmark-o";
  return (
    <TouchableOpacity onPress={onPress}>
      <FontAwesome name={name} size={40} color="salmon" />
    </TouchableOpacity>
  );
};
