import React from "react";
import { FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ListItem } from "../components/ListItem";
import { useSelector } from "react-redux";

const ClipScreen = () => {
  const clips = useSelector((index, state) => state.user.clips);
  return;
  <SafeAreaView>
    <FlatList
      data={clips}
      renderItem={(item) => (
        <ListItem
          imageURL={item.urlToImage}
          title={item.title}
          author={article.author}
          key={index.toString()}
          //   onPress={() => navigation.navigate("Article", { article: article })}
        />
      )}
    />
  </SafeAreaView>;
};

export default ClipScreen;
