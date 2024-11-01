import { StyleSheet, Image, View, Text, TouchableOpacity } from "react-native";

export const ListItem = (props) => {
  return (
    <TouchableOpacity style={styles.itemContainer} onPress={props.onPress}>
      <View style={styles.leftContainer}>
        <Image
          style={{ width: 100, height: 100 }}
          source={{ uri: props.imageURL }}
        />
      </View>
      <View style={styles.rightContainer}>
        <Text numberoflines={3} style={styles.text}>
          {props.title}
        </Text>
        <Text style={styles.subtext}>{props.author}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    height: 100,
    width: "100%",
    // backgroundColor:"white",
    flexDirection: "row",
    margin: 10,
  },
  leftContainer: {
    height: 100,
  },
  rightContainer: {
    height: 100,
    padding: 10,
    flex: 1,
    justifyContent: "space-between",
    // backgroundColor:"blue",
  },
  text: {
    fontSize: 16,

    subtext: {
      fontSize: 12,
      color: "gray",
    },
  },
});
