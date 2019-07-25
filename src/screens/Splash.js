import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    StatusBar,
    Image
} from 'react-native';

export default class Splash extends Component {
    render (){
        return (
            <View style={styles.linearGradient}>
                <StatusBar backgroundColor="#4dd0e1" barStyle="light-content" />
                <View style={styles.logoSplash}>
                    <Image source={require('../assets/travel.png')} style={{width:200,height:200}}/>
                    <Text style={styles.text}>AyoDolan</Text>
                </View>
            </View>
        );
    }

};

const styles = StyleSheet.create({
    linearGradient: {
        flex: 1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor: '#4dd0e1'
    },
    logoSplash: {
        width: 170,
        height: 25,
        justifyContent:'center',
        alignItems:'center'
    },
    text: {
        fontSize:34,
        color:'#fff',
        fontWeight:'bold',
        fontFamily:'Arial'
    }
});
