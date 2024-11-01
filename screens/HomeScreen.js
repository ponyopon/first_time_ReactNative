import { StatusBar } from "expo-status-bar";
import { StyleSheet, ScrollView, SafeAreaView } from "react-native";
import { ListItem } from "../components/ListItem";
import { useEffect, useState } from "react";
import axios from "axios";
import Constants from "expo-constants";

const URL = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${Constants.expoConfig.extra.newsApiKey}`;

export const HomeScreen = ({ navigation }) => {
  const [articles, setArticles] = useState([]);
  const fetchArticles = async () => {
    try {
      const response = await axios.get(URL);
      setArticles(response.data.articles);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchArticles();
  }, []);
  const items = articles.map((article, index) => {
    return (
      <ListItem
        imageURL={article.urlToImage}
        title={article.title}
        author={article.author}
        key={index.toString()}
        onPress={() => navigation.navigate("Article", { article: article })}
      />
    );
  });
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>{items}</ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
