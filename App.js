import { NavigationContainer } from "@react-navigation/native";
import { HomeScreen } from "./screens/HomeScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ArticleScreen } from "./screens/ArticleScreen";
import ClipScreen from "./screens/ClipScreen";
import { FontAwesome } from "@expo/vector-icons";
import { store, persistor } from "./store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

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
  );
};

const ClipStack = () => {
  return (
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
  );
};

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>

    </PersistGate>

      <NavigationContainer screenOptions={screenOption}>
        <Tab.Navigator>
          <Tab.Screen
            name="HomeTab"
            component={HomeStack}
            options={{ headerShown: false, title: "Home" }}
          />
          <Tab.Screen
            name="ClipTab"
            component={ClipStack}
            options={{ headerShown: false, title: "Clip" }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
