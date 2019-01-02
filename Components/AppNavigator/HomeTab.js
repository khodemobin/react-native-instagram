import React, { Component } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import {
  Container,
  Content,
  Icon,
  Thumbnail,
  Header,
  Left,
  Right,
  Body,
  Title
} from "native-base";
import CardComponent from "../CardComponent";

class HomeTab extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Icon ios="ios-home" android="md-home" style={{ color: tintColor }} />
    )
  };

  render() {
    return (
      <Container style={styles.container}>
        <Header style={{ backgroundColor: "white" }}>
          <Left style={{ flex: 1 }}>
            <Icon
              ios="ios-camera"
              android="md-camera"
              style={{ paddingLeft: 10 }}
            />
          </Left>
          <Body>
            <Title style={styles.headerTitle}>Instagram</Title>
          </Body>
          <Right style={{ flex: 1 }}>
            <Icon
              ios="ios-send"
              android="md-send"
              style={{ paddingRight: 10 }}
            />
          </Right>
        </Header>

        <Content>
          <View style={{ height: 100 }}>
            <View style={styles.storiesView}>
              <Text style={{ fontWeight: "bold" }}>Stories</Text>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Icon
                  android="md-play"
                  ios="ios-play"
                  style={{ fontSize: 14 }}
                />
                <Text style={{ fontWeight: "bold" }}>Watch All</Text>
              </View>
            </View>
            <View style={{ flex: 3 }}>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                  alignItems: "center",
                  paddingStart: 5,
                  paddingEnd: 5
                }}
              >
                <Thumbnail
                  style={styles.storiesImage}
                  source={require("../../assets/me.jpg")}
                />
                <Thumbnail
                  style={styles.storiesImage}
                  source={require("../../assets/me.jpg")}
                />
                <Thumbnail
                  style={styles.storiesImage}
                  source={require("../../assets/me.jpg")}
                />
                <Thumbnail
                  style={styles.storiesImage}
                  source={require("../../assets/me.jpg")}
                />
                <Thumbnail
                  style={styles.storiesImage}
                  source={require("../../assets/me.jpg")}
                />
                <Thumbnail
                  style={styles.storiesImage}
                  source={require("../../assets/me.jpg")}
                />
                <Thumbnail
                  style={styles.storiesImage}
                  source={require("../../assets/me.jpg")}
                />
                <Thumbnail
                  style={styles.storiesImage}
                  source={require("../../assets/me.jpg")}
                />
              </ScrollView>
            </View>
          </View>

          <CardComponent imageSource="1" likes="101" />
          <CardComponent imageSource="2" likes="201" />
          <CardComponent imageSource="3" likes="301" />
        </Content>
      </Container>
    );
  }
}

export default HomeTab;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  },
  storiesView: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 7
  },
  storiesImage: {
    marginHorizontal: 5,
    borderColor: "pink",
    borderWidth: 2
  },
  headerTitle: {
    flex: 1,
    color: "black",
    alignSelf: "center",
    marginTop: 13
  }
});
