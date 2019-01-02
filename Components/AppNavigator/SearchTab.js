import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
import {Icon} from "native-base";


class ScreenTab extends Component {
    static navigationOptions = {
        tabBarIcon: ({tintColor}) => (
            <Icon ios='ios-home' android="md-search" style={{color: tintColor}}/>
        )
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>ScreenTab</Text>
            </View>
        )
    }
}

export default ScreenTab;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
});
