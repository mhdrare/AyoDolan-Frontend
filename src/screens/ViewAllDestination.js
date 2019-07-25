import React, {Component, Fragment} from 'react';
import { ActivityIndicator, AsyncStorage, View, Text, StyleSheet, ScrollView, FlatList, Image, ImageBackground, TouchableOpacity, Modal} from 'react-native';
import { Button, Icon } from "native-base";
import Icons from 'react-native-vector-icons/Entypo'
import {getDestinasi, getPopular} from '../public/redux/action/destinasi'
import { connect } from "react-redux"

class main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalVisible: false,
            selected: [],
            loading: true
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

    componentDidMount(){
        this.props.dispatch(getDestinasi(50))
    }

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
                <View style={component.header}>
                    <TouchableOpacity style={{flex: 1}} onPress={()=>this.props.navigation.goBack()}>
                        <Icons name="chevron-thin-left" size={24} />
                    </TouchableOpacity>
                    <View style={{flex: 3}}>
                        <Text style={{fontFamily: 'sans-serif-thin', fontSize: 18, textAlign: 'center'}}>{'Destinations'.toUpperCase()}</Text>
                    </View>
                    <View style={{flex: 1}}/>
                </View>
                {this.props.destinasi.isLoading ? 
                    <View style={{marginTop: 60}}>
                        <ActivityIndicator size="large" color="#4dd0e1"/>
                    </View> :
                    <ScrollView>
                        <View style={styles.container}>
                            <View style={styles.contentTitle}>
                                <Text style={styles.Title}>Trendings</Text>
                            </View>
                            <View style={styles.contentSub}>
                                <Text>High season, everyone here</Text>
                                <Text style={{ color: "#ffffff" }}>View All</Text>
                            </View>
                            <View style={styles.flatlisB}>
                                <FlatList
                                    style={{width: '100%', paddingLeft: 20, paddingRight: 20}}
                                    horizontal={false}
                                    data={this.props.destinasi.datadestinasi}
                                    renderItem={this.listMainB}
                                    keyExtractor={(item,index)=>index.toString()}
                                    showsHorizontalScrollIndicator={false}
                                />
                            </View>
                        </View>
                    </ScrollView>
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
      destinasi: state.destinasi
      // auth: state.auth
    };
  };
  
export default connect(mapStateToProps)(main);

const component = StyleSheet.create({
    header: {
        height: 50,
        flexDirection: 'row',
        backgroundColor: '#fff',
        width: '100%',
        alignItems: 'center',
        paddingLeft: 10,
        paddingRight: 10
    }
})
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
        display: 'flex'
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