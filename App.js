import { NavigationContainer } from "@react-navigation/native";
import { HomeScreen } from "./screens/HomeScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ArticleScreen } from "./screens/ArticleScreen";
import ClipScreen from "./screens/ClipScreen";
import { FontAwesome } from "@expo/vector-icons";
import { store } from "./store";
import { Provider } from "react-redux";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const screenOption = ({ route }) => ({
  tabBarIcon: ({ color, size }) => {
    if (route.name === "HomeTab") {
      {
        console.log(route);
      }
      return <FontAwesome name="home" size={size} color={color} />;
    } else if (route.name === "ClipTab") {
      return <FontAwesome name="bookmark" size={size} color={color} />;
    }
  },
});

const HomeStack = () => {
  return (
    <Provider store={store}>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Article"
          component={ArticleScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </Provider>
  );
};
export default function App() {
  return (
    <NavigationContainer screenOptions={screenOption}>
      <Tab.Navigator>
        <Tab.Screen
          name="HomeTab"
          component={HomeStack}
          options={{ headerShown: false, title: "Home" }}
        />
        <Tab.Screen
          name="ClipTab"
          component={ClipScreen}
          options={{ headerShown: false, title: "Clip" }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
