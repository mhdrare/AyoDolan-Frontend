import React, { Component, Fragment } from 'react';
import { View, Text, StyleSheet, ScrollView, FlatList, Image, ImageBackground, Button, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import ParallaxScroll from '@monterosa/react-native-parallax-scroll';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';


export default class details extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [{
                id: 1,
                pict: 'https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg'
            },
            {
                id: 2,
                pict: 'https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg'
            }],
            dataGuide: [{
                id: 1,
                pict: 'https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg'
            },
            {
                id: 2,
                pict: 'https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg'
            },
            {
                id: 3,
                pict: 'https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg'
            },
            {
                id: 4,
                pict: 'https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg'
            },
            {
                id: 5,
                pict: 'https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg'
            },
            {
                id: 6,
                pict: 'https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg'
            },
            {
                id: 7,
                pict: 'https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg'
            },
            {
                id: 8,
                pict: 'https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg'
            }],
            favorite: false}
    }

    pictA = ({ item }) => (
        <Image source={{ uri:`${item.pict}` }} style={styles.minipictA} />
    )

    pictB = ({ item }) => (
        <Image source={{ uri: `${item.pict}` }} style={styles.minipictB} />
    )

    render() {
        return (
            <Fragment>
                <ScrollView>
                    <ImageBackground source={{ uri: 'https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg' }} style={{ width:"100%", height: 250 }}>
                        <View style={styles.container}>
                            <View style={styles.header}>
                                <TouchableOpacity>
                                    <Icon name="arrowleft" size={30} style={{ color: "#fff" }}/>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </ImageBackground>
                    <View style={styles.content}>
                        <Text style={styles.contentHead}>Santa Monica</Text>
                        <Text style={{ fontSize: 18 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus volutpat ultrices nulla eget fringilla. Nullam iaculis ac ex ac aliquam. Suspendisse non convallis sem, quis vulputate purus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam sit amet fermentum ante. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Praesent mattis erat non nulla ultricies viverra. </Text>
                    </View>
                    
                    <View style={{ marginTop: 30 }}>
                        <MapView
                            provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                            style={{ height: 200, width: 400, alignItems: "center" }}
                            region={{
                                latitude: 37.78825,
                                longitude: -122.4324,
                                latitudeDelta: 0.015,
                                longitudeDelta: 0.0121,
                            }}
                        >
                        </MapView>
                    </View>
                    
                    <View style={styles.boxContent}>
                        <View style={styles.innerBox}>
                            <Text style={{ marginBottom: 8, fontWeight: "bold", fontSize: 16 }}>Surfing Spots</Text>
                            <FlatList 
                                data={this.state.data}
                                horizontal={true}
                                keyExtractor={this.state.data.id}
                                renderItem={this.pictA}
                                showsHorizontalScrollIndicator={false}
                            />
                            <Text style={{ marginTop: 8 }}>21 spots</Text>
                        </View>
                        <View style={styles.innerBox}>
                            <Text style={{ marginBottom: 8, fontWeight: "bold", fontSize: 16 }}>Surfing Shops</Text>
                            <Image source={{ uri: `https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg` }} style={styles.minipictA} />
                            <Text style={{ marginTop: 8 }}>21+ Shops</Text>

                        </View>
                        <ImageBackground source={{ uri: 'https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg' }} style={styles.innerBox} imageStyle={{ borderRadius: 15 }}>
                            <Text style={{ marginBottom: 8, fontWeight: "bold", fontSize: 16, color: "#fff" }}>Surfing Spots</Text>
                        </ImageBackground>
                        <View style={styles.innerBoxOrder}>
                            <Text style={{ marginBottom: 8, fontWeight: "bold", fontSize: 16 }}>Order ?</Text>
                            {/* <Button title="Order" color="#841584" style={{ width: 20, borderRadius: 50 }} /> */}
                            <Text style={{ marginTop: 8 }}>Want to order this Trip</Text>
                            <TouchableOpacity >
                                <View style={{ borderColor: "#fff", backgroundColor:"#EEEEEE", borderRadius: 25, width: "100%",Height:50, padding: 15, borderWidth: 0.4, marginTop: 15 }}>
                                    <Text style={{ textAlign: "center" }}>Order Now</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </Fragment>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
    },
    header: { 
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        marginHorizontal: "5%", 
        marginTop: 23 
    },
    content:{
        marginHorizontal: 30,
        marginTop: 20
    },
    contentHead:{
        fontSize: 50,
        marginBottom: 15
    },
    boxContent:{
        display:"flex",
        flexDirection: "row",
        flexWrap: "wrap",
        marginHorizontal: "5%", 
        marginVertical: 20
    },
    innerBox:{
        width: 140,
        height: 140,
        borderRadius: 15,
        backgroundColor: "#EEEEEE",
        margin: 5,
        padding: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5
    },
    innerBoxOrder: {
        width: 140,
        height: 140,
        borderRadius: 15,
        backgroundColor: "#4dd0e1",
        margin: 5,
        padding: 20,
        // alignItems: "center"
    },
    minipictA:{
        width: 50,
        height: 50,
        borderRadius: 5,
        marginRight: 5
    },
    minipictB: {
        width: 50,
        height: 50,
        borderRadius: 150,
        marginRight: 5
    }
});