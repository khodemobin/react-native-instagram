import React, { Component } from "react";
import { Platform, StyleSheet } from "react-native";
import { TabNavigator } from "react-navigation";
import { Icon } from "native-base";
import HomeTab from "./AppNavigator/HomeTab";
import SearchTab from "./AppNavigator/SearchTab";
import AddMediaTab from "./AppNavigator/AddMediaTab";
import LikesTab from "./AppNavigator/LikeTab";
import ProfileTab from "./AppNavigator/ProfileTab";

class MainScreen extends Component {
  static navigationOptions = {
    // headerLeft:  <Icon ios='ios-camera' android="md-camera" style={{paddingLeft: 10}}/>,
    // title: "Instagram",
    // headerRight: <Icon ios='ios-send' android="md-send" style={{paddingRight: 10}}/>,
    // headerTitleStyle: {
    //
    // },
    header: null
  };

  render() {
    return <AppTabNavigator />;
  }
}

export default MainScreen;
const AppTabNavigator = TabNavigator(
  {
    HomeTab: {
      screen: HomeTab
    },
    SearchTab: {
      screen: SearchTab
    },
    AddMediaTab: {
      screen: AddMediaTab
    },
    LikesTab: {
      screen: LikesTab
    },
    ProfileTab: {
      screen: ProfileTab
    }
  },
  {
    animationEnabled: true,
    swipeEnable: true,
    tabBarPosition: "bottom",
    tabBarOptions: {
      style: {
        ...Platform.select({
          android: {
            backgroundColor: "white"
          }
        })
      },
      activeTintColor: "#000",
      inactiveTintColor: "#d1cece",
      showLabel: false,
      showIcon: true
    }
  }
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
