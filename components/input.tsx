import React, { useState } from "react";
import { View, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../constants/colors";

interface ISearchInputProps {}

const SearchInput: React.FC<ISearchInputProps> = () => {
  const [input, setInput] = useState<string>("");

  const handleChangeText = (text: string) => setInput(text);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={handleChangeText}
        value={input}
        placeholder="Search for Jobs"
      />
      <TouchableOpacity
        style={{
          backgroundColor: Colors.darkText,
          padding: 8,
          marginLeft: 22,
          borderRadius: 12,
          justifyContent: "center",
        }}
        onPress={() => {}}
      >
        <Ionicons name="search" size={32} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 4,
    marginVertical: 16,
  },
  input: {
    flex: 1,
    padding: 8,
    backgroundColor: Colors.lightGray,
    borderRadius: 12,
    fontSize: 16,
  },
});

export default SearchInput;
