import React, {Component, Fragment} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, ImageBackground, Image, Alert, AsyncStorage} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { connect } from "react-redux"

class Profile extends Component {
    logout = async () => {
        await AsyncStorage.removeItem('id')
        AsyncStorage.removeItem('Token', (error) => {
            if (error) {
                alert(error)
            } else {
                this.props.navigation.navigate('AuthCheck');
            }
        })
    }

    logoutHandler = () => {
        Alert.alert(
            "Logout",
            "Are you sure ?",
            [
                {
                    text: "NO", onPress: () => {
                    }
                },
                {
                    text: "YES", onPress: () => {
                        this.logout()
                    }
                }
            ],
            { cancelable: false }
        )
    }

    async componentDidMount() {
        
    }

    render() {
        return(
            <Fragment>
                <ImageBackground source={require('../img/cafe.jpg')} style={style.container}>
                    <View style={{ position: "absolute", marginTop: 15, marginLeft: 15 }}>
                        <TouchableOpacity onPress={() => { this.props.navigation.goBack()}}>
                            <Icon name="arrowleft" style={{ color: "#fff", fontSize: 30 }} />
                        </TouchableOpacity>
                    </View>
                    <Image source={{ uri: 'https://st4.depositphotos.com/5934840/20525/v/600/depositphotos_205253058-stock-video-young-man-cartoon-hd-animation.jpg'}} style={style.imageProfile} />
                    {/* <View style={style.userProfile}>
                        <Text style={style.userName}>This Profile</Text>
                    </View> */}
                </ImageBackground>
                <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                    <View style={{flex: 1, alignItems: 'center', paddingLeft: 20, justifyContent: 'center'}}>
                        <TouchableOpacity onPress={() => { this.props.navigation.navigate('SingleTrip') }}  style={{flexDirection: 'row', padding: 5}}>
                            <Icon style={{flex:1, alignSelf: 'center'}} name="bars" size={20}/>
                            <Text style={{flex:2, fontSize: 14, fontFamily: 'sans-serif-medium'}}>Riwayat</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                        <TouchableOpacity onPress={() => { this.props.navigation.navigate('Transaction') }}  style={{flexDirection: 'row', padding: 5}}>
                            <Icon style={{flex:1, alignSelf: 'center'}} name="profile" size={20}/>
                            <Text style={{flex:2, fontSize: 14, fontFamily: 'sans-serif-medium'}}>Transaksi</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                        <TouchableOpacity onPress={this.logoutHandler} style={{flexDirection: 'row', padding: 5}}>
                            <Icon style={{flex:1, alignSelf: 'center'}} name="poweroff" size={20} color={'red'}/>
                            <Text style={{flex:2, fontSize: 14, fontFamily: 'sans-serif-medium', color: 'red'}}>Logout</Text>
                        </TouchableOpacity>
{/*
                    <Image source={{uri:this.props.users.data.image}} style={style.imageProfile} />
                    <View style={style.userProfile}>
                        <Text style={style.userName}>{this.props.users.data.name}</Text>
                        <TouchableOpacity>
                            <Icon name="edit" style={style.ico} />
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
                <View style={style.profileContainer}>
                    <View style={style.profileItem}>
                        <Icon name="idcard" style={style.profileIcon} />
                        <Text style={style.profileName}>{this.props.users.data.username}</Text>
                    </View>
                    <View style={style.profileItem}>
                        <Icon name="mail" style={style.profileIcon} />
                        <Text style={style.profileName}>{this.props.users.data.email}</Text>
                    </View>
                    <View style={style.profileItem}>
                        <Icon name="phone" style={style.profileIcon} />
                        <Text style={style.profileName}>{this.props.users.data.no_phone}</Text>
*/}
                    </View>
                </View>
            </Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
      destinasi: state.destinasi,
      users: state.users
    };
  };
  
export default connect(mapStateToProps)(Profile);

const style = StyleSheet.create({
    container:{
        display: "flex",
        width: "100%",
        height: "70%"
    },
    imageProfile:{
        marginTop: 50,
        width: 130,
        height: 130,
        borderRadius: 150,
        alignSelf: "center",
        marginBottom: 30
    },
    userName:{
        fontSize: 30,
        color: "#fff"
    },
    userProfile:{
        alignSelf: "center",
        flexDirection: "row"
    },
    ico:{
        marginLeft: 15,
        color: "#fff",
        fontSize: 25,
        // marginRight: 20
    },
    profileContainer:{
        display: "flex",
        flex: 1,
        alignSelf: "center"
    },
    profileItem:{
        flexDirection: "row",
        marginTop: 25
    },
    profileIcon:{
        fontSize: 20,
        marginRight: "20%"
    },
    profileName:{
        fontSize: 20
    },
    logout:{
        marginTop: 50,
        alignSelf: "center",
        
    },
    powerIco:{
        fontSize: 30
    }
});