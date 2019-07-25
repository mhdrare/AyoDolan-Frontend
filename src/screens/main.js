import React, {Component, Fragment} from 'react';
import { ActivityIndicator, AsyncStorage, View, Text, StyleSheet, ScrollView, FlatList, Image, ImageBackground, TouchableOpacity, Modal} from 'react-native';
import { Button, Icon } from "native-base";

import {getDestinasi, getPopular} from '../public/redux/action/destinasi'
import { fetchUser } from '../public/redux/action/users'
import { connect } from "react-redux"

class main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            modalVisible: false,
            selected: [],
            loading: false,
        }
        this.bootstrapAsync();
    }

    goDetails = async () => {
        await this.props.navigation.navigate('Details', { item: this.state.selected })
        this.setModalVisible(false)
    }

    goPackage = async () => {
        let id = this.state.selected.id_destination
        await this.props.navigation.navigate('ListPaketWisata', id)
        this.setModalVisible(false)
    }

    bootstrapAsync = async () => {
        let user_id = await AsyncStorage.getItem("user_id");
        let token = await AsyncStorage.getItem("Token");
        this.setState({
            id: user_id,
            token: token,
            loading: false
        });
    };

    async componentDidMount(){
        await this.props.dispatch(getDestinasi(5))
        let user_id = await AsyncStorage.getItem("user_id")
        await this.props.dispatch(fetchUser(user_id))
    }

    listMain = ({ item }) => (
        <TouchableOpacity activeOpacity={0.8} onPress={() => this.setState({ modalVisible: true, selected: item })}>
            <ImageBackground source={{ uri: item.image }} style={styles.BgList} imageStyle={{ borderRadius: 15 }}>
                <View style={{flex: 4}}></View>
                <View style={{flex: 2, justifyContent: 'center'}}>
                    <Text style={styles.TitleList} numberOfLines={2} >{item.destination}</Text>
                </View>
            </ImageBackground>
        </TouchableOpacity>
    )

    listMainB = ({ item }) => (
        <TouchableOpacity activeOpacity={0.8} style={{flex: 1}} onPress={() => this.setState({ modalVisible: true, selected: item })}>
            <View>
                <ImageBackground source={{ uri: item.image }} style={styles.imagesSecond} imageStyle={{borderRadius: 15}}>
                    <View style={{flex: 4}}></View>
                    <View style={{flex: 3, justifyContent: 'center'}}>
                        <Text style={styles.TitleListSecond} numberOfLines={1} >{item.destination}</Text>
                    </View>
                </ImageBackground>
            </View>
        </TouchableOpacity>
    )

    setModalVisible(visible, value) {
        if (value == undefined) {
            this.setState({
                modalVisible: visible
            });
        } else {
            this.setState({
                modalVisible: visible,
                name: value.name,
                no: value.no,
                status: value.status,
                id: value.id,
                imageUrl: value.imageUrl,
                chat: { id: value.id, name: value.name }
            });
        }
    }

    render() {
        return(
            <Fragment>
                { (this.props.destinasi.isLoading) ? 
                    <View style={{flex: 1, justifyContent: 'flex-end', alignItems: 'center'}}>
                        <ActivityIndicator size="large" color="#4dd0e1"/>
                        <Image source={require('../assets/loading.png')} style={{ width: '100%', height: 400}}/>
                    </View>:
                    <View style={styles.container}>
                        <View style={styles.content}>
                            <Text style={{ fontSize: 20, fontFamily: 'sans-serif-condensed', paddingLeft: 5 }}>AyoDolan</Text>
                            <TouchableOpacity onPress={() => { this.props.navigation.navigate('userProfile') }}>
                                <Image source={{ uri: 'https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg' }} style={{ width: 28, height: 28, borderRadius: 10, paddingRight: 5 }} />
                            </TouchableOpacity>
                        </View>
                    <ScrollView>
                        <View style={styles.container}>
                            
                            <View style={styles.contentTitle}>
                                <Text style={styles.Title}>Surf Destination</Text>
                            </View>
                            <View style={styles.contentSub}>
                                <Text>Best surf destination for you</Text>
                                <TouchableOpacity onPress={() => this.props.navigation.navigate('ViewAllDestination')}>
                                    <Text style={{ color: "#FF8A65" }}>View All</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.flatlis}>
                                <FlatList
                                    horizontal={true}
                                    data={this.props.destinasi.datadestinasi}
                                    renderItem={this.listMain}
                                    keyExtractor={(item, index) => index.toString()}
                                    showsHorizontalScrollIndicator={false}
                                />
                            </View>
                            <View style={styles.contentTitle}>
                                <Text style={styles.Title}>Trendings</Text>
                            </View>
                            <View style={styles.contentSub}>
                                <Text>High season, everyone here</Text>
                                <TouchableOpacity onPress={() => this.props.navigation.navigate('ViewAllDestination')}>
                                    <Text style={{ color: "#FF8A65" }}>View All</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.flatlisB}>
                                <FlatList
                                    style={{ width: '100%', paddingLeft: 20, paddingRight: 20 }}
                                    horizontal={false}
                                    data={this.props.destinasi.datadestinasi}
                                    keyExtractor={(item, index) => index.toString()}
                                    renderItem={this.listMainB}
                                    showsHorizontalScrollIndicator={false}
                                />
                            </View>
                        </View>
                    </ScrollView>
                </View>
                }

                <Modal
                    transparent={true}
                    animationType="fade"
                    visible={this.state.modalVisible}
                    onPress={() => this.setModalVisible(false)}>
                    <View style={{ flex: 1, backgroundColor: "rgba(51,51,51,0.5)" }}>
                        <TouchableOpacity
                            onPress={() => this.setModalVisible(false)}
                            style={styles.modelstyle}>
                            <View style={styles.imageModal}>
                                <View style={{flex: 2,backgroundColor: "#fff",borderRadius: 5,padding: 5}}>
                                    <ImageBackground source={{ uri: this.state.selected.image }} style={styles.images}>
                                        <View style={{flex: 4}}></View>
                                        <View style={{flex: 2, justifyContent: 'flex-end'}}>
                                            <Text style={{fontSize: 20,textAlign: "center",fontWeight: "bold",color: "#ffffff",padding: 5}}>
                                                {this.state.selected.destination}
                                            </Text>
                                            <View style={{flexDirection: "row",width: "100%",paddingLeft: 20,paddingRight: 20,marginTop: 5,marginBottom: 15}}>
                                                <Button
                                                    onPress={this.goPackage}
                                                    primary
                                                    light
                                                    style={{
                                                        flex: 1,
                                                        marginRight: 5,
                                                        justifyContent: "center"
                                                    }}>
                                                    <Text>

                                                    Package
                                                    </Text>
                                                </Button>
                                                <Button
                                                    onPress={this.goDetails}
                                                    success
                                                    light
                                                    style={{
                                                        flex: 1,
                                                        marginLeft: 5,
                                                        justifyContent: "center"
                                                    }}>
                                                    <Text> Single Trip </Text>
                                                </Button>
                                            </View>
                                        </View>
                                    </ImageBackground>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>
                </Modal>
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
  
export default connect(mapStateToProps)(main);

const styles = StyleSheet.create({
    modelstyle: {
        position: "absolute",
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        justifyContent: "center",
        alignItems: "center"
    },
    imageModal: {
        width: "80%",
        height: "80%",
        textAlign: "center",
        alignSelf: "center",
        position: "relative",
        backgroundColor: "#FFF9EC",
        borderRadius: 5,
        elevation: 3
    },
    images: {
        height: "100%",
        width: "100%",
        alignSelf: "center"
    },
    container:{
        display: "flex",
    },
    content:{
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 10,
        alignItems: 'center'
    },
    contentTitle:{
        marginTop: 12,
        marginLeft: 20
    },
    contentSub:{
        flexDirection: "row",
        justifyContent: "space-around",
        marginLeft: -20
    },
    Title:{
        fontSize: 24,
        fontWeight: "bold"
    },
    flatlis:{
        marginTop: 8,
        marginBottom: 30,
        paddingLeft: 20,
        paddingRight: 20
    },
    flatlisB: {
        marginTop: 12,
        flex: 1,
        alignItems: 'center',
        marginBottom: 150
    },
    BgList:{
        backgroundColor: "#EEEEEE",
        width: 143,
        height: 250,
        marginRight: 10,
        borderRadius: 25,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        margin: 1,
        elevation: 3,
    },
    BgListB: {
        width: '100%',
        height: 157,
        margin: 5,
        borderRadius: 10,
    },
    TitleList:{
        fontFamily: 'sans-serif-condensed',
        fontSize: 18,
        paddingLeft: 10,
        color: '#fff',
    },
    DescList:{
        fontFamily: 'sans-serif-medium',
        paddingLeft: 10,
        color: '#fff',
    },
    TitleListSecond:{
        fontFamily: 'sans-serif-condensed',
        fontSize: 18,
        paddingLeft: 10,
        color: '#fff',
    },
    DescListSecond:{
        fontFamily: 'sans-serif-medium',
        paddingLeft: 10,
        color: '#fff',
    },
    textList:{
        alignSelf: "flex-end",
        marginTop: 160,
        color: "#fff"
        
    },
    imagesSecond: {
        height: 150,
        width: '100%',
        elevation: 3,
        marginBottom: 15
    }
});