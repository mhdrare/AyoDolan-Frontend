import React, {Component, Fragment} from 'react';
import { AsyncStorage, View, Text, StyleSheet, ScrollView, FlatList, Image, ImageBackground, TouchableOpacity, Modal} from 'react-native';
import { Button, Icon } from "native-base";

export default class main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [{
                title: "Bali",
                hours: 20,
                url: 'https://www.indonesia.travel/content/dam/indtravelrevamp/en/destinations/bali-nusa-tenggara/bali/bali/Image3.jpg'
            },
            {
                title: "Yogyakarta",
                hours: 20,
                url: 'https://www.indonesia.travel/content/dam/indtravelrevamp/en/destinations/java/di-yogyakarta/image11.jpg'
            },
            {
                title: "Bayuwangi",
                hours: 20,
                url: 'https://www.indonesia.travel/content/dam/indtravelrevamp/en/destinations/destination-update-may-2019/banyuwangiartikel1.jpg'
            },
            {
                title: "Raja Ampat",
                hours: 20,
                url: 'https://www.indonesia.travel/content/dam/indtravelrevamp/en/destinations/destination-update-may-2019/RA_Pianemoisland_indtravel.jpg'
            }], 
            modalVisible: false,
            selected: [],
            loading: true
        }
        this.bootstrapAsync();
    }

    goDetails = async () => {
        await this.props.navigation.navigate('Details')
        this.setModalVisible(false)
    }

    exit = async () => {
        await AsyncStorage.removeItem("user_id");
        await AsyncStorage.removeItem("token");
        this.props.navigation.navigate("Login");
    };

    bootstrapAsync = async () => {
        let user_id = await AsyncStorage.getItem("user_id");
        let token = await AsyncStorage.getItem("token");
        this.setState({
            id: user_id,
            token: token,
            loading: false
        });
    };

    listMain = ({ item }) => (
        <TouchableOpacity activeOpacity={0.8} onPress={() => this.setState({ modalVisible: true, selected: item })}>  
            <ImageBackground source={{ uri: item.url }} style={styles.BgList} imageStyle={{ borderRadius: 15 }}>
                <View style={{flex: 4}}></View>
                <View style={{flex: 2, justifyContent: 'center'}}>
                    <Text style={styles.TitleList} numberOfLines={1} >{item.title}</Text>
                    <Text style={styles.DescList} numberOfLines={1} >{item.hours}</Text>
                </View>
            </ImageBackground>
        </TouchableOpacity>
    )

    listMainB = ({ item }) => (
        <TouchableOpacity activeOpacity={0.8} style={{flex: 1}}>
            <View>
                <ImageBackground source={{ uri: item.url }} style={styles.imagesSecond} imageStyle={{borderRadius: 15}}>
                    <View style={{flex: 4}}></View>
                    <View style={{flex: 3, justifyContent: 'center'}}>
                        <Text style={styles.TitleListSecond} numberOfLines={1} >{item.title}</Text>
                        <Text style={styles.DescListSecond} numberOfLines={1} >{item.hours}</Text>
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
                <ScrollView>
                    <View style={styles.container}>
                        <View style={styles.content}>
                            <Image source={require('../img/menu.png')} style={{ width: 15, height: 15 }} />
                            {/* <Text>This Main</Text> */}
                            <Image source={{ uri: 'https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg' }} style={{ width: 28, height: 28, borderRadius: 10 }} />
                        </View>
                        <View style={styles.contentTitle}>
                            <Text style={styles.Title}>Surf Destination</Text>
                        </View>
                        <View style={styles.contentSub}>
                            <Text>Best surf destination for you</Text>
                            <TouchableOpacity onPress={() => alert}>
                                <Text style={{ color: "#FF8A65" }}>View All</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.flatlis}>
                            <FlatList 
                                horizontal={true}
                                data={this.state.data}
                                renderItem={this.listMain}
                                showsHorizontalScrollIndicator={false}
                            />
                        </View>
                        <View style={styles.contentTitle}>
                            <Text style={styles.Title}>Trendings</Text>
                        </View>
                        <View style={styles.contentSub}>
                            <Text>High season, everyone here</Text>
                            <TouchableOpacity>
                                <Text style={{ color: "#FF8A65" }}>View All</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.flatlisB}>
                            <FlatList
                                style={{width: '100%', paddingLeft: 20, paddingRight: 20}}
                                horizontal={false}
                                data={this.state.data}
                                renderItem={this.listMainB}
                                showsHorizontalScrollIndicator={false}
                            />
                        </View>
                    </View>
                </ScrollView>

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
                                    <ImageBackground source={{ uri: this.state.selected.url }} style={styles.images}>
                                        <View style={{flex: 4}}></View>
                                        <View style={{flex: 1}}>
                                            <Text style={{fontSize: 20,textAlign: "center",fontWeight: "bold",color: "#ffffff",padding: 5}}>
                                                {this.state.selected.title}
                                            </Text>
                                            <View style={{flexDirection: "row",width: "100%",paddingLeft: 20,paddingRight: 20,marginTop: 5,marginBottom: 15}}>
                                                <Button
                                                    onPress={() => {
                                                        alert('this chat btn');
                                                    }}
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
        // marginTop: 10,
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
        margin: 25
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
        borderRadius: 25,
    },
    TitleList:{
        fontFamily: 'sans-serif-condensed',
        fontSize: 23,
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
        fontSize: 23,
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