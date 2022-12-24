import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import IconCar from "../assets/IconCar";
import IconCategory from "../assets/IconCategory";
import IconHome from "../assets/IconHome";
import IconProfile from "../assets/IconProfile";
import Dashboard from "../screens/Dashboard/Dashboard";
import CategoryScreen from "../screens/CategoryScreen";
import ExploreScreen from "../screens/ExploreScreen";
import ProfileScreen from "../screens/ProfileScreen";
import { View } from "react-native";
const Tab = createBottomTabNavigator();

const TabBarIcon = ({ iconName = "home", focused }) => {
  let activeColor = "#FF5353";
  let inActiveColor = "#7D7D7D";
  const Icon = () => {
    if (iconName === "home") {
      return <IconHome color={focused ? activeColor : inActiveColor} />;
    } else if (iconName === "category") {
      return <IconCategory color={focused ? activeColor : inActiveColor} />;
    } else if (iconName === "explore") {
      return <IconCar color={focused ? activeColor : inActiveColor} />;
    } else if (iconName === "profile") {
      return <IconProfile color={focused ? activeColor : inActiveColor} />;
    }
  };
  return (
    <View style={{ justifyContent: "center", alignItems: "center" }}>
      {Icon()}
      {focused ? (
        <View
          style={{
            backgroundColor: activeColor,
            width: 5,
            height: 5,
            borderRadius: 2,
            marginTop: 4,
          }}
        />
      ) : null}
    </View>
  );
};

const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "dashboard") {
            iconName = <TabBarIcon iconName="home" {...{ focused }} />;
          } else if (route.name === "category") {
            iconName = <TabBarIcon iconName="category" {...{ focused }} />;
          } else if (route.name === "explore") {
            iconName = <TabBarIcon iconName="explore" {...{ focused }} />;
          } else if (route.name === "profile") {
            iconName = <TabBarIcon iconName="profile" {...{ focused }} />;
          }

          // You can return any component that you like here!
          return iconName;
        },
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
        tabBarShowLabel: false,
        headerTitleStyle: {
          display: "none",
        },
      })}
    >
      <Tab.Screen
        options={{ headerShown: false }}
        name="dashboard"
        component={Dashboard}
      />
      <Tab.Screen name="category" component={CategoryScreen} />
      <Tab.Screen name="explore" component={ExploreScreen} />
      <Tab.Screen name="profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigation;
