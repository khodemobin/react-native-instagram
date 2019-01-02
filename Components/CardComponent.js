import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import {
  Icon,
  Button,
  Card,
  CardItem,
  Thumbnail,
  Body,
  Left,
  Right
} from "native-base";

class CardComponent extends Component {
  render() {
    const images = {
      "1": require("./../assets/feed_images/1.jpg"),
      "2": require("./../assets/feed_images/2.jpg"),
      "3": require("./../assets/feed_images/3.jpg")
    };
    return (
      <Card>
        <CardItem>
          <Left>
            <Thumbnail source={require("../assets/me.jpg")} />
            <Body>
              <Text>Mobin</Text>
              <Text note> Jan 15, 2018 </Text>
            </Body>
          </Left>
        </CardItem>
        <CardItem cardBody>
          <Image
            source={images[this.props.imageSource]}
            style={styles.cardBodyItem}
          />
        </CardItem>
        <CardItem style={{ height: 45 }}>
          <Left>
            <Button transparent>
              <Icon
                ios="ios-heart"
                android="md-heart"
                style={{ color: "black" }}
              />
            </Button>
            <Button transparent>
              <Icon
                ios="ios-chatbubbles"
                android="md-chatbubbles"
                style={{ color: "black" }}
              />
            </Button>
            <Button transparent>
              <Icon
                ios="ios-send"
                android="md-send"
                style={{ color: "black" }}
              />
            </Button>
          </Left>
        </CardItem>
        <CardItem style={{ height: 20 }}>
          <Text>{this.props.likes}</Text>
        </CardItem>
        <CardItem>
          <Body>
            <Text>
              <Text style={{ fontWeight: "900" }}>سلام</Text>
              لورم ایپسوم یا طرح‌نما(به انگلیسی: Lorem ipsum) به متنی آزمایشی و
              بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود.طراح
              گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و
              ارایه اولیه شکل ظاهری و کلی طرح
            </Text>
          </Body>
        </CardItem>
      </Card>
    );
  }
}

export default CardComponent;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white"
  },
  cardBodyItem: {
    height: 200,
    width: null,
    flex: 1
  }
});
