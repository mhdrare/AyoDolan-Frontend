import React, {Component, Fragment} from 'react';
import { AsyncStorage, View, Text, StyleSheet, ScrollView, FlatList, Image, ImageBackground, TouchableOpacity, Modal} from 'react-native';
import { Button, Icon } from "native-base";

export default class main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [{
                title: "bali",
                hours: 20
            },
            {
                title: "bali",
                hours: 20
            },
            {
                title: "bali",
                hours: 20
            },
            {
                title: "bali",
                hours: 20
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
        <ImageBackground source={{ uri: 'https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg' }} style={styles.BgList} imageStyle={{ borderRadius: 25 }}>
                <Text style={styles.TitleList}>{item.title}</Text>
                <Text>{item.hours}</Text>
        </ImageBackground>
        </TouchableOpacity>
    )

    listMainB = ({ item }) => (
        <TouchableOpacity activeOpacity={0.8}>
            <View style={{ marginLeft: "10%", marginBottom: 25 }}>
                <Image source={{ uri: 'https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg' }} style={styles.BgListB} />
                <View style={{ marginTop: 5, marginLeft: "10%" }}>
                    <Text style={{fontSize: 20}}>{item.title}</Text>
                    <Text>{item.hours}</Text>
                </View>
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
    
    render()
    {
        return(
            <Fragment>
                <ScrollView>
                    <View style={styles.container}>
                        <View style={styles.content}>
                            <Image source={require('../img/menu.png')} style={{ width: 15, height: 15 }} />
                            {/* <Text>This Main</Text> */}
                            <TouchableOpacity onPress={() => { this.props.navigation.navigate('userProfile') }}>
                                <Image source={{ uri: 'https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg' }} style={{ width: 28, height: 28, borderRadius: 10 }} />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.contentTitle}>
                            <Text style={styles.Title}>Surf Camps</Text>
                        </View>
                        <View style={styles.contentSub}>
                            <Text>Best surf destination for you</Text>
                            <TouchableOpacity>
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
                    onPress={() => this.setModalVisible(false)}
                >
                    <View
                        style={{
                            flex: 1,
                            backgroundColor: "rgba(51,51,51,0.5)"
                        }}
                    >
                        <TouchableOpacity
                            onPress={() => this.setModalVisible(false)}
                            style={styles.modelstyle}
                        >
                            <View style={styles.imageModal}>
                                <View
                                    style={{flex: 2,backgroundColor: "#42A5F5",borderRadius: 5,padding: 5}}
                                >
                                    <Image
                                        // source={require('https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg')}
                                        source={{ uri: `https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg`}}
                                        style={styles.images}
                                    />
                                    <Text
                                        style={{fontSize: 20,textAlign: "center",fontWeight: "bold",color: "#FAFAFA",padding: 5}}
                                    >

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
                                            }}
                                        >
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
                                            }}
                                        >
                                            <Text>

                                            Single Trip
                                            </Text>
                                        </Button>
                                    </View>
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
        height: "80%",
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
        marginLeft: 30
    },
    contentSub:{
        flexDirection: "row",
        justifyContent: "space-around",
        marginLeft: -25
    },
    Title:{
        fontSize: 27,
        fontWeight: "bold"
    },
    flatlis:{
        marginTop: 8,
        marginBottom: 30 
    },
    flatlisB: {
        marginTop: 12
    },
    BgList:{
        
        backgroundColor: "#EEEEEE",
        width: 157,
        height: 250,
        margin: 13,
        borderRadius: 25,
        padding: 30,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,

        elevation: 7,
    },
    BgListB: {
        width: "85%",
        height: 157,
        margin: 5,
        borderRadius: 25,
    },
    TitleList:{
        fontSize: 25,
        marginTop: 162
    },
    textList:{
        alignSelf: "flex-end",
        marginTop: 160,
        color: "#fff"
        
    },
    
});