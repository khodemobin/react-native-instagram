import React,{Component} from 'react';
import{
  View,
  Text,
  StyleSheet
} from 'react-native';
import {Icon} from "native-base";


class LikeTab extends Component {
    static navigationOptions={
        tabBarIcon:({tintColor})=>(
            <Icon ios='ios-heart' android="md-heart" style={{color: tintColor}}/>
        )
    }
  render(){
    return(
      <View style={styles.container}>
        <Text>LikeTab</Text>
      </View>
    )
  }
}
export default LikeTab;
const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center'
  },
});
